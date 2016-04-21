import { combineReducers } from 'redux';
import { loginActions, registerActions } from '../actions';

function authenication(state = {isFetching: false, isAuthenticated: false, message: '' }, action) {
  switch (action.type) {

    case loginActions.LOGIN_REQUEST:
      return {
        isFetching: true,
        isAuthenticated: false
      };

    case loginActions.LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      };

    case loginActions.LOGIN_FAILURE:
      return {
        isFetching: false,
        isAuthenticated: false,
        message: action.message
      };

    case loginActions.LOGOUT_REQUEST:
      return {
        isFetching: true,
        isAuthenticated: true
      }

    case loginActions.LOGOUT_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: false
      }

    default:
      return state;
  }
}

export default authenication;
