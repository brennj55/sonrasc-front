import { combineReducers } from 'redux';
import { dashboardActions } from '../actions';
import { zipObject, filter, toSafeInteger, isUndefined, sum } from 'lodash';

const sliderInitialState = {
  values: { min: 0, max: 1 },
  minValue: 0,
  maxValue: 1,
  graphType: ''
};

function slider(state = sliderInitialState, action) {
  switch (action.type) {

    case dashboardActions.INITALISE_SLIDER_VALUES:
      return Object.assign({}, state, {
        minValue: action.min, maxValue: action.max
      });

    case dashboardActions.SET_GRAPH_TYPE:
      return Object.assign({}, state, {
        graphType: action.graphType
      });

    case dashboardActions.CHANGE_SLIDER_VALUES:
      if (state.graphType === action.graphType) {
        return Object.assign({}, state, {
          values: {
            min: action.min,
            max: action.max
          }
        });
      }
      else return state;

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

    case dashboardActions.SET_GRAPH_TYPE:
      return Object.assign({}, state, { graphType: action.graphType });

    case dashboardActions.SET_GRAPH_DATA:
      if (state.graphType === action.graphType) {
        return Object.assign({}, state, {
          allData: action.data,
          data: action.data.map(d => d.y),
          labels: action.data.map(d => d.x)
        });
      }
      else return state;

    case dashboardActions.FILTER_GRAPH_DATA:
      if (state.graphType === action.graphType) {
        console.log(action.min, action.max)
        const filteredPoints = filter(state.allData, point => action.min <= point.x && point.x <= action.max);
        console.log(filteredPoints);
        return Object.assign({}, state, {
          data: filteredPoints.map(point => point.y),
          labels: filteredPoints.map(point => point.x)
        });
      }
      else return state;

    default:
      return state;
  }
}

function pieChart(state = {}, action) {
  switch (action.type) {

    case dashboardActions.SET_PI_CHART_DATA:
      return Object.assign({}, state, {
        data: action.data,
        allData: action.data
      });

    case dashboardActions.FILTER_PIE_CHART:
      return Object.assign({}, state, {
        data: filterInvoices(state.allData, action)
      });

    default:
      return state;
  }
}

const filterInvoices = (bsns, action) => {
  return bsns.map(bsn => {
    let invoices = filter(bsn.invoices, point => action.min <= new Date(point.date.value).getTime() && new Date(point.date.value).getTime() <= action.max)
    let total = sum(invoices.map(invoice => invoice.totalCost));
    return {
      business: bsn.business,
      invoices: invoices,
      sum: total
    };
  });
}

const CostOverTime = combineReducers({
  slider,
  graphData
});

const Dashboards = combineReducers({
  CostOverTime,
  pieChart
});

export default Dashboards;
