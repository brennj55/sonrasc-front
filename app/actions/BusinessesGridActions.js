export const GET_BUSINESSES_REQUEST = "GET_BUSINESSES_REQUEST";
export function getBusinessesRequest() {
  return {
    type: GET_BUSINESSES_REQUEST
  }
}

export const GET_BUSINESSES_SUCCESS = "GET_BUSINESSES_SUCCESS";
export function getBusinessesSuccess(data) {
  return {
    type: GET_BUSINESSES_SUCCESS,
    data
  };
}

export function getBusinessesForGrid() {
  return (dispatch) => {
    dispatch(getBusinessesRequest());
    fetch('http://192.168.99.100:7004/api/businesses/', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: "include",
    }).then(res => res.json())
      .then(json => {
        dispatch(getBusinessesSuccess(json.payload));
      });
  };
}
