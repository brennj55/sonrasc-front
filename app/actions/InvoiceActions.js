export const GET_INVOICE_REQUEST = "GET_INVOICE_REQUEST";
export function getInvoiceRequest() {
  return {
    type: GET_INVOICE_REQUEST
  }
}

export const GET_INVOICE_SUCCESS = "GET_INVOICE_SUCCESS";
export function getInvoiceSuccess(invoice) {
  return {
    type: GET_INVOICE_SUCCESS,
    invoice
  }
}

export const SET_WHO_UPLOADED_INVOICE = "SET_WHO_UPLOADED_INVOICE";
export function setUploaderName(name) {
  return {
    type: SET_WHO_UPLOADED_INVOICE,
    name
  }
}

export function setName(userID) {
  return (dispatch) => {
    fetch('http://192.168.99.100:7004/api/name/', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    credentials: 'include',
    body: JSON.stringify({ id: userID })
  }).then(res => res.json())
    .then(json => dispatch(setUploaderName(json.firstName + " " + json.lastName)));
  }
};

export function getInvoice(key) {
  return (dispatch) => {
    dispatch(getInvoiceRequest());
    fetch('http://192.168.99.100:7004/api/invoices/' + key, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include'
    }).then(res => res.json())
      .then(invoice => {
          dispatch(getInvoiceSuccess(invoice));
          dispatch(setName(invoice.uploadedBy))
        }
      );
  };
}
