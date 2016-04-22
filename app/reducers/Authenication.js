import { combineReducers } from 'redux';
import { loginActions, registerActions } from '../actions';

const USERNAME_FIELD_UNTOUCHED = 0;
const USERNAME_FIELD_UNAVAILABLE = -1;
const USERNAME_FIELD_AVAILABLE = 1;

const initalRegistrationState =  { usernameAvailable: USERNAME_FIELD_UNTOUCHED };
function registration(state = initalRegistrationState, action) {
  switch (action.type) {
    case registerActions.USERNAME_UNAVAILALE:
      return { usernameAvailable: USERNAME_FIELD_UNAVAILABLE };

    case registerActions.USERNAME_AVAILALE:
      return { usernameAvailable: USERNAME_FIELD_AVAILABLE };

    case registerActions.RESET_FIELD:
      return initalRegistrationState;

    default:
      return state;
  }
}

function loggedIn(state = {isFetching: false, isAuthenticated: false, message: '' }, action) {
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

const Authenication = combineReducers({
  loggedIn,
  registration
});

export default Authenication;
