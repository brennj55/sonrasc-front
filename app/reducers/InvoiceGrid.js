import { combineReducers } from 'redux';
import { invoiceGrid as actions } from '../actions';

function invoices(state = { fetching: false }, action) {
  switch (action.type) {

    case actions.GET_INVOICES_REQUEST:
      return { fetching: true }

    default:
      return state;
  }
}

const InvoiceGrid = combineReducers({
  invoices
});

export default InvoiceGrid;
