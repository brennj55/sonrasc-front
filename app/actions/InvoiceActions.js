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

export function getInvoice(key) {
  return (dispatch) => {
    dispatch(getInvoiceRequest());
    fetch('http://192.168.99.100:7004/api/invoices/' + key, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .then(x => {
        console.log(x);
        dispatch(getInvoiceSuccess(x));
      });
  };
}
