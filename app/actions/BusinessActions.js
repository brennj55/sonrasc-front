
export const SET_BUSINESS_DATA = "SET_BUSINESS_DATA";
export function setData(data) {
  return {
    type: SET_BUSINESS_DATA,
    data
  }
}

export function getBusiness(key) {
  return (dispatch) => {
    fetch('http://192.168.99.100:7004/api/businesses/data/' + key, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include'
    }).then(res => res.json())
      .then(json => dispatch(setData(json.business)));
  };
}
