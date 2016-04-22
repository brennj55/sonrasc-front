import { combineReducers } from 'redux';
import { invoiceActions as actions } from '../actions';

function name(state = { fetching: false, user: '' }, action) {
  switch (action.type) {

    case actions.GET_NAME_REQUEST:
      return Object.assign({}, state, { fetching: true });

    case actions.SET_WHO_UPLOADED_INVOICE:
      return Object.assign({}, state, { user: action.name });

    default:
      return state;
  }
}

const invoiceInitialState = {
  fetching: false,
  data: {
    business: { value: '' },
    items: [],
    date: { value: new Date(0) },
    address: { value: '' }
  }
};

function invoice(state = invoiceInitialState, action) {
  switch (action.type) {

    case actions.GET_INVOICE_REQUEST:
      return Object.assign({}, state, { fetching: true });

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
  invoice,
  name
});

export default Invoice;
