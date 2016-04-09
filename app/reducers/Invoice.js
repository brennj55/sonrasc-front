import { combineReducers } from 'redux';
import { invoiceActions as actions } from '../actions';

function invoice(state = { fetching: false, invoice: {} }, action) {
  switch (action.type) {

    case actions.GET_INVOICE_REQUEST:
      return { fetching: true }

    case actions.GET_INVOICE_SUCCESS:
      return {
        fetching: false,
        data: action.invoice
      }

    default:
      return state;
  }
}

const Invoice = combineReducers({
  invoice
});

export default Invoice;
