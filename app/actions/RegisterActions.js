export const registerUser = (username, password) => {
  return dispatch => {
    console.log(username, password);
    fetch('http://192.168.99.100:7004/api/users', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({username, password})
    }).then((res) => res.json())
    .then(json => console.log(json));
  };
};
