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
  allLabels: [],
  data: [],
  allData: []
};

function graphData(state = costsOverTimeInitialState, action) {
  switch (action.type) {

    case dashboardActions.SET_GRAPH_TYPE:
      return Object.assign({}, state, { graphType: action.graphType });

    case dashboardActions.SET_GRAPH_DATA:
      if (state.graphType === action.graphType) {
        return Object.assign({}, state, { allData: action.data, data: action.data });
      }
      else return state;

    case dashboardActions.SET_LABEL_DATA:
      if (state.graphType === action.graphType) {
        return Object.assign({}, state, { labels: action.labels, allLabels: action.labels });
      }
      else return state;

    case dashboardActions.FILTER_GRAPH_DATA:
      if (state.graphType === action.graphType) {
        const points = zipObject(state.allLabels, state.allData);
        const filteredPoints = filter(points, (point, label) => action.min <= toSafeInteger(label) && action.max >= toSafeInteger(label) && !isUndefined(point) && !isUndefined(label));
        const f = state.allLabels.filter(label => action.min <= toSafeInteger(label) && action.max >= toSafeInteger(label));
        console.log(f, filteredPoints, points);
        return Object.assign({}, state, {
          labels: f,
          data: filteredPoints
        });
      }

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
