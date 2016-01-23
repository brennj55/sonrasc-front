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
