import { combineReducers } from 'redux';
import { loginActions, registerActions } from '../actions';

const FIELD_UNTOUCHED = 0;
const FIELD_UNAVAILABLE = -1;
const FIELD_AVAILABLE = 1;

const initalRegistrationState =  {
  usernameAvailable: FIELD_UNTOUCHED,
  businessAvailable: FIELD_UNTOUCHED,
  username: { value: '', valid: true },
  firstName: { value: '', valid: true },
  lastName: { value: '', valid: true },
  validPassword: true
};

function registration(state = initalRegistrationState, action) {
  switch (action.type) {
    case registerActions.USERNAME_UNAVAILALE:
      return Object.assign({}, state, { usernameAvailable: FIELD_UNAVAILABLE });

    case registerActions.USERNAME_AVAILALE:
      return Object.assign({}, state, { usernameAvailable: FIELD_AVAILABLE });

    case registerActions.USERNAME_UNTOUCHED:
      return Object.assign({}, state, { usernameAvailable: FIELD_UNTOUCHED });

    case registerActions.BUSINESS_UNAVAILALE:
      return Object.assign({}, state, { businessAvailable: FIELD_UNAVAILABLE });

    case registerActions.BUSINESS_AVAILALE:
      return Object.assign({}, state, { businessAvailable: FIELD_AVAILABLE });

    case registerActions.BUSIENSS_UNTOUCHED:
      return Object.assign({}, state, { businessAvailable: FIELD_UNTOUCHED });

    case "LOCATION_CHANGE":
      return initalRegistrationState;

    case registerActions.INVALID_FIELD:
      return Object.assign({}, state, {
        [action.field]: { value: action.value, valid: false }
      });

    case registerActions.INVALID_PASSWORD:
      return Object.assign({}, state, {
        validPassword: false
      });

    case registerActions.VALID_PASSWORD:
      return Object.assign({}, state, {
        validPassword: true
      });

    case registerActions.SET_FIELD:
      return Object.assign({}, state, {
        [action.field]: { value: action.fieldValue, valid: true }
      });

    default:
      return state;
  }
}

const tryAndGetUser = () => {
  if (localStorage.user) return JSON.parse(localStorage.user);
  else return {};
};

function loggedIn(state = {isFetching: false,
  isAuthenticated: !!localStorage.user || false, message: '',
  sessionID: document.cookie.replace(/(?:(?:^|.*;\s*)connect.sid\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '',
  user: tryAndGetUser()
}, action) {
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
