import { push } from 'react-router-redux';

export const USERNAME_UNAVAILALE = "USERNAME_UNAVAILALE";
export function usernameUnavailable() {
  return {
    type: USERNAME_UNAVAILALE
  };
}

export const RESET_FIELD = "RESET_FIELD";
export function resetField(field) {
  return {
    type: RESET_FIELD,
    field
  };
}

export const USERNAME_AVAILALE = "USERNAME_AVAILALE";
export function usernameAvailable() {
  return {
    type: USERNAME_AVAILALE
  };
}

export const checkIfUsernameAvailable = (username) => {
  return dispatch => {
    fetch('http://192.168.99.100:7004/api/username', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({username})
    }).then(res => res.json())
      .then(json => {
        if (!json.available) dispatch(usernameUnavailable());
        else dispatch(usernameAvailable());
      });
  }
}

export const registerUser = (username, password, data) => {
  return dispatch => {
    fetch('http://192.168.99.100:7004/api/register', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: "include",
      body: JSON.stringify({username, password,
        firstName: data.firstName,
        lastName: data.lastName,
        business: data.business
      })
    }).then(res => {
      return res.json();
    }).then(json => {
        console.log(json);
        if (json.success) dispatch(push("/invoices/upload"));
      }
    ).catch(error => {
      console.log(error);
    });
  };
};
