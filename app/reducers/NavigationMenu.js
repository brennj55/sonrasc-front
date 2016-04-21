import { combineReducers } from 'redux';
import { navigationMenuActions as actions } from '../actions';

function navigationMenu(state = { open: false }, action) {
  switch (action.type) {

    case actions.TOGGLE_NAVIGATION:
      return { open: !state.open }

    default:
      return state;
  }
}

export default navigationMenu;
