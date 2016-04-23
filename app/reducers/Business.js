import { combineReducers } from 'redux';
import { businessActions as actions } from '../actions';

const businessInitialState = {
  fetching: false,
  business: '',
  address: '',
  invoices: []
};

function businessData(state = businessInitialState, action) {
  switch (action.type) {

    case actions.SET_BUSINESS_DATA:
      return Object.assign({}, state, {
        fetching: false,
        business: action.data.business,
        address: action.data.address,
        invoices: action.data.invoices
      });

    default:
      return state;
  }
}

const Business = combineReducers({
  businessData
});

export default Business;
