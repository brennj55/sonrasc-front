import { combineReducers } from 'redux';
import { dashboardActions } from '../actions';

const sliderInitialState = { values: { min: 0, max: new Date().getFullYear() }};
function slider(state = sliderInitialState, action) {
  switch (action.type) {

    case dashboardActions.CHANGE_SLIDER_VALUES:
      return {
        values: {
          min: action.min,
          max: action.max
        }
      };

    default:
      return state;
  }
}

const Dashboards = combineReducers({
  slider
});

export default Dashboards;
