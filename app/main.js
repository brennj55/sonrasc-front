import { createStore, combineReducers } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const todo = (state, action) => {
  const actionTypes = {

    'ADD_TODO': () => {
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    },

    'TOGGLE_TODO': () => {
      if (state.id !== action.id) return state;
      return Object.assign({}, state, {
        completed: !state.completed
      });
    },

    default: () => state
  };

  if (actionTypes[action.type]) return actionTypes[action.type]();
  else return actionTypes.default();
};

export const todos = (state = [], action) => {
  const actionTypes = {
    'ADD_TODO': () => [ ...state, todo(undefined, action)
    ],

    'TOGGLE_TODO': () => {
      return state.map(t => todo(t, action));
    },

    default: () => state
  };

  if (actionTypes[action.type]) return actionTypes[action.type]();
  else return actionTypes.default();
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  const actionTypes = {
    'SET_VISIBILITY_FILTER': () => action.filter,
    default: () => state
  };

  if (actionTypes[action.type]) return actionTypes[action.type]();
  else return actionTypes.default();
};

export const currentInputText = (state = '', action) => {
  const actionTypes = {
    'SET_TEXT': () => action.text,
    default: () => state
  };

  if (actionTypes[action.type]) return actionTypes[action.type]();
  else return actionTypes.default();
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  currentInputText
});

const store = createStore(todoApp);

const getVisibleTodos = (todos, filter) => {
  const actionTypes = {
    'SHOW_ALL': () => todos,
    'SHOW_COMPLETED': () => todos.filter(t => t.completed),
    'SHOW_ACTIVE': () => todos.filter(t => !t.completed),
    default: () => todos
  };

  if (actionTypes[filter]) return actionTypes[filter]();
  else return actionTypes.default();
}

const FilterLink = ({filter, currentFilter, children}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
    href='#'
    onClick={
      e => {
        e.preventDefault();
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        });
      }}>
      {children}</a>
    );
  };

  let nextTodoId = 0;

  class TodoApp extends React.Component {

    dispatchAddTodo(value) {
      return () => {
        store.dispatch({
          type: 'ADD_TODO',
          text: value,
          id: nextTodoId++
        });
        store.dispatch({type: 'SET_TEXT', text:''});
      };
    }

    todoListItem() {
      return (todo) =>
      <li
      key={todo.id}
      onClick={() => {store.dispatch({type: 'TOGGLE_TODO', id: todo.id});}}
      style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
      >
      {todo.text}
      </li>;
    }

    render() {
      const {
        todos,
        visibilityFilter
      } = this.props;

      const visibleTodos = getVisibleTodos(todos, visibilityFilter);
      return (
        <div>
        <input onChange={(node) => {
          store.dispatch({type: 'SET_TEXT', text: node.target.value});
        }} value={this.props.currentInputText} />
        <button onClick={this.dispatchAddTodo(this.props.currentInputText)}>
        Add Todo
        </button>
        <ul>
        {visibleTodos.map(this.todoListItem())}
        </ul>

        <p>
        Show:
        {' '}
        <FilterLink
        filter='SHOW_ALL'
        currentFilter ={visibilityFilter}
        >
         All
        </FilterLink>

        <FilterLink
        filter='SHOW_ACTIVE'
          currentFilter ={visibilityFilter}
        >
         Active
        </FilterLink>
        <FilterLink
        filter='SHOW_COMPLETED'
        currentFilter ={visibilityFilter}
        >_Completed
        </FilterLink>
        </p>
        </div>
      );
    }
  }

  const render = () => {
    ReactDOM.render(
      <TodoApp
        {...store.getState()}
      />,
      document.getElementById('container')
    );
  };

  store.subscribe(render);
  render();
