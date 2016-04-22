import { combineReducers } from 'redux';
import { navigationMenuActions as actions } from '../actions';

function navigationMenu(state = { open: false }, action) {
  switch (action.type) {

    case actions.TOGGLE_NAVIGATION:
      return { open: !state.open }

    case actions.CLOSE_NAVIGATION:
      return { open: false }

    default:
      return state;
  }
}

export default navigationMenu;
