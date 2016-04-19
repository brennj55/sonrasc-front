import { combineReducers } from 'redux';
import { dashboardActions } from '../actions';

const sliderInitialState = {
  values: { min: 0, max: new Date().getFullYear() },
  type: ''
};
function slider(state = sliderInitialState, action) {
  switch (action.type) {

    case dashboardActions.SET_GRAPH_TYPE:
      return {
        values: { min: 0, max: new Date().getFullYear() },
        type: action.type
      };

    case dashboardActions.CHANGE_SLIDER_VALUES:
      if (state.type === action.type) {
        return {
          values: {
            min: action.min,
            max: action.max
          }
        };
      }
      else return;

    default:
      return state;
  }
}

const costsOverTimeInitialState = {
  labels: [1, 2, 3],
  data: [1, 2, 3]
};

function graphData(state = costsOverTimeInitialState, action) {
  switch (action.type) {
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
