export function getBusiness(key) {
  return (dispatch) => {
    fetch('http://192.168.99.100:7004/api/businesses/data/' + key, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include'
    }).then(res => res.json())
      .then(json => console.log(json));
  };
}
