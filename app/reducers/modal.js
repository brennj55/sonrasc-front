import { TOGGLE_MODAL, OPEN_MODAL, CLOSE_MODAL } from '../actions/modal-actions.js';
import { combineReducers } from 'redux';

const modal = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    case TOGGLE_MODAL:
      return true;
    default:
      return false;
  }
};

const modalDisplay = combineReducers({
  modal
});

export default modalDisplay;
