import * as types from '../../app/constants/ActionTypes.js';
import { items } from '../../app/reducers/invoice.js';

export default describe('Add an invoice - ', () => {

  describe('Add an item - ', () => {
    const initialState = [];
    const item = {
      quantity: 1,
      name: "Bottle of water",
      VAT: 0.23,
      price: 1.34
    };
    const action = {
      type: types.ADD_ITEM,
      item: item
    };

    Object.freeze(initialState);
    Object.freeze(item);
    Object.freeze(action);

    it('should be empty array', () => {
      expect(items(undefined, {
        type: "NO_ACTION",
        item: {}
      })).toEqual(initialState);
    });

    it('should return state on unknown action', () => {
      expect(items(initialState, {
        type: "SOMETHING_ELSE",
        item: {}
      })).toEqual(initialState);
    });

    it('should add an item to list', () => {
      expect(
        items(initialState, action)
      ).toEqual([item]);
    });

  });
});
