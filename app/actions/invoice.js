import * as types from '../constants/ActionTypes.js';

export const addItem = (item) => {
  return {
    type: types.ADD_ITEM,
    item
  };
};
