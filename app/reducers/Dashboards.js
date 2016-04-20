import { combineReducers } from 'redux';
import { dashboardActions } from '../actions';
import { zipObject, filter, toSafeInteger, isUndefined } from 'lodash';

const sliderInitialState = {
  values: { min: 0, max: 0 },
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

const CostOverTime = combineReducers({
  slider,
  graphData
});

const Dashboards = combineReducers({
  CostOverTime
});

export default Dashboards;
