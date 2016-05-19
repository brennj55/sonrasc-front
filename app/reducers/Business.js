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
        id: action.data._id,
        business: action.data.business,
        address: action.data.address,
        invoices: action.data.invoices
      });

    default:
      return state;
  }
}

const costsOverTimeInitialState = {
  graphType: '',
  labels: [],
  data: [],
  allData: []
};

function graphData(state = costsOverTimeInitialState, action) {
  switch (action.type) {

    case actions.SET_GRAPH_DATA_FOR_BUSINESS:
      return Object.assign({}, state, {
        allData: action.business.invoices,
        data: action.business.invoices.map(d => d.totalCost),
        labels: action.business.invoices.map(d => new Date(d.date.value).getTime())
      });

    default:
      return state;
  }
}

const Business = combineReducers({
  businessData,
  graphData
});

export default Business;
