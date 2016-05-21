const URL = 'http://' + location.hostname;
export const GET_INVOICES_REQUEST = "GET_INVOICES_REQUEST";
export function getInvoicesRequest() {
  return {
    type: GET_INVOICES_REQUEST
  }
}

export const GET_INVOICES_SUCCESS = "GET_INVOICES_SUCCESS";
export function getInvoicesSuccess(data) {
  return {
    type: GET_INVOICES_SUCCESS,
    data
  };
}

export function getInvoicesForGrid() {
  return (dispatch) => {
    dispatch(getInvoicesRequest());
    fetch(URL + ':7004/api/invoices/', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: "include",
    }).then(res => res.json())
      .then(json => {
        console.log(json);
        dispatch(getInvoicesSuccess(json));
      });
  };
}
