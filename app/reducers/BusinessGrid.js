import { combineReducers } from 'redux';
import { businessGrid as actions } from '../actions';

function businesses(state = { fetching: false, data: [] }, action) {
  switch (action.type) {

    case actions.GET_BUSINESSES_REQUEST:
      return { fetching: true }

    case actions.GET_BUSINESSES_SUCCESS:
      return {
        fetching: false,
        data: action.data
      }

    default:
      return state;
  }
}

const BusinessGrid = combineReducers({
  businesses
});

export default BusinessGrid;
