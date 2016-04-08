import { combineReducers } from 'redux';
import { invoiceGrid as actions } from '../actions';

function invoices(state = { fetching: false, data: [] }, action) {
  switch (action.type) {

    case actions.GET_INVOICES_REQUEST:
      return { fetching: true }

    case actions.GET_INVOICES_SUCCESS:
      return {
        fetching: false,
        data: action.data
      }

    default:
      return state;
  }
}

const InvoiceGrid = combineReducers({
  invoices
});

export default InvoiceGrid;
