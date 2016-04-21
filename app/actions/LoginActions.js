import { push } from 'react-router-redux';

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

export function loginUser(credentials) {
  return (dispatch) => {
    dispatch(requestLogin());
    fetch('http://192.168.99.100:7004/api/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include',
      body: JSON.stringify({username: credentials.username, password: credentials.password})
    }).then(res => {
      console.log(res);
      return res.json();
    }).then(json => {
        console.log(json);
        if (json.success) {
          dispatch(receiveLogin(json.user));
          dispatch(push("/invoices/upload"));
        }
        else {
          dispatch(loginError("Incorrect details."));
        }
      });
  };
};
