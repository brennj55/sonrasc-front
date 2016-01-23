import { todos, currentInputText } from '../app/main.js';

describe('Todos', () => {
  const stateBefore = [];
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  Object.freeze(stateBefore);

  it('Add a todo', () => {
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    };

    Object.freeze(action);
    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });

  it('Non defined action given', () => {
    const action = {
      type: 'SOMETHING_ELSE',
      id: 0,
      text: 'Learn Rdux'
    };
    Object.freeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual(stateBefore);
  });

  it('Toggle Todo', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go Shopping',
        completed: false
      }
    ];
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go Shopping',
        completed: true
      }
    ];
    Object.freeze(action);
    Object.freeze(stateBefore);

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);

  });

  it('Set input text', () => {
    const stateBefore = '';
    const action = {
      type: 'SET_TEXT',
      text: 'H'
    };
    const stateAfter = 'H';
    Object.freeze(action);
    expect(
      currentInputText(stateBefore, action)
    ).toEqual(stateAfter);
  });
});
