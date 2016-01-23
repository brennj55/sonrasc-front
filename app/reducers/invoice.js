import * as types from '../constants/ActionTypes.js';
import { addItem } from '../actions/invoice.js';


export const items = (state = [], action) => {

  switch (action.type) {
    case types.ADD_ITEM:
      return [action.item, ...state];

    default:
      return state;
  }
};
