import { push } from 'react-router-redux';

export const registerUser = (username, password, data) => {
  return dispatch => {
    console.log(username, password);
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
      });
  };
};
