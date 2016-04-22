import { combineReducers } from 'redux';
import { businessActions as actions } from '../actions';

const businessInitialState = {
  fetching: false,
  business: '',
  address: '',
  invoices: []
};

function business(state = businessInitialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}

const Business = combineReducers({
  business
});

export default Invoice;
