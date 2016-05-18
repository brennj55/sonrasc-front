import { push } from 'react-router-redux';
import * as navigationActions from './NavigationMenuActions';
const URL = 'http://' + location.hostname;

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST
  };
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    message
  };
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
function requestLogout() {
  return {
    type: LOGOUT_REQUEST
  };
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
function recieveLogout() {
  return {
    type: LOGOUT_SUCCESS
  };
}

const checkIfLoginSuccess = (dispatch, json) => {
  if (json.success) {
    dispatch(receiveLogin(json.user));
    localStorage.setItem("user", JSON.stringify(json.user));
    dispatch(navigationActions.toggleNavigation());
    dispatch(push("/invoices/upload"));
  }
  else {
    dispatch(loginError("Incorrect details."));
  }
};

const getLoginPostObject = (credentials) => {
  return {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    credentials: 'include',
    body: JSON.stringify({username: credentials.username, password: credentials.password})
  };
};

export function loginUser(credentials) {
  return (dispatch) => {
    dispatch(requestLogin());
    fetch(URL + ':7004/api/login', getLoginPostObject(credentials))
      .then(res => res.json())
      .then(json => checkIfLoginSuccess(dispatch, json));
  };
}

const getLogoutGetObject = () => {
  return {
    method: 'GET',
    credentials: 'include'
  };
};

const checkIfLogoutSuccess = (dispatch, json) => {
  if (json.success) {
    dispatch(recieveLogout());
    localStorage.removeItem("user");
    dispatch(navigationActions.closeNavigation());
    dispatch(push("/"));
  }
};

export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    fetch(URL + ':7004/api/logout', getLogoutGetObject())
      .then(res => res.json())
      .then(json => checkIfLogoutSuccess(dispatch, json));
  };
}
