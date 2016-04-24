import io from 'socket.io-client';
import { packageInvoiceForStorage } from '../utils/invoice.js';
import { push } from 'react-router-redux';
import { has, round } from 'lodash';
const URL = 'http://' + location.hostname;

export const SELECT_IMAGE = "SELECT_IMAGE";
export function selectImage(image) {
  return {
    type: SELECT_IMAGE,
    image
  };
}

export const CLEAR_IMAGE = "CLEAR_IMAGE";
export function clearImage() {
  return {
    type: CLEAR_IMAGE
  }
}

export const CROP_IMAGE_AREA = "CROP_IMAGE";
export function cropImage(imageData, boundary) {
  return {
    type: CROP_IMAGE_AREA,
    imageData,
    boundary
  };
}

export const REQUEST_CROPPED_DATA = "REQUEST_CROPPED_DATA";
export function requestCroppedData() {
  return {
    type: REQUEST_CROPPED_DATA
  }
}

export const RECIEVE_CROPPED_DATA = "RECIEVE_CROPPED_DATA";
export function recieveCroppedData(cropType, json) {
  return {
    type: RECIEVE_CROPPED_DATA,
    cropType,
    data: json,
    recievedAt: Date.now()
  };
}

export function fetchCroppedData(type, imageData, boundary) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const OCR_API_SOCKET = io.connect(location.hostname + ":" + process.env.WEB_OCR_API_PORT);
      OCR_API_SOCKET.emit('image-cropping', {imageData: imageData, cropType: type});
      OCR_API_SOCKET.on('extracted-text', data => {
        if (!type.includes("Item")) resolve(dispatch(updateUploadForm(type, data, boundary)));
        else {
          const [itemToken, id, field] = type.split('/');
          resolve(dispatch(updateItem(data, field, parseInt(id), boundary)));
        }
      });
    }).then(() => dispatch(clearDialog()));
  };
}

export const UPDATE_UPLOAD_FORM = "UPDATE_UPLOAD_FORM";
export function updateUploadForm(dataType, value, boundary) {
  return {
    type: UPDATE_UPLOAD_FORM,
    key: dataType,
    value: value,
    boundary: boundary
  }
}

export const CLEAR_UPLOAD_FORM = "CLEAR_UPLOAD_FORM";
export function clearUploadFormFields() {
  return {
    type: CLEAR_UPLOAD_FORM
  }
}

export const CLEAR_DIALOG = "CLEAR_DIALOG";
export function clearDialog() {
  return {
    type: CLEAR_DIALOG
  }
}

export const TOGGLE_CROPPING_DIALOG = "TOGGLE_CROPPING_DIALOG";
export function toggleCroppingDialog(cropType) {
  return {
    type: TOGGLE_CROPPING_DIALOG,
    cropType
  };
}

export const ADD_NEW_ITEM = "ADD_NEW_ITEM";
export function addItem() {
  return {
    type: ADD_NEW_ITEM
  }
}

export const UPDATE_ITEM = "UPDATE_ITEM";
export function updateItem(value, field, id, boundary) {
  return {
    type: UPDATE_ITEM,
    value, field, id, boundary
  };
}

export const REMOVE_ITEM = "REMOVE_ITEM";
export function removeItemByID(key) {
  return {
    type: REMOVE_ITEM,
    key
  };
}

export const CLEAR_ITEMS = "CLEAR_ITEMS";
export function clearItems() {
  return {
    type: CLEAR_ITEMS
  };
}

export function updateItemsTotal(id) {
  return (dispatch, getState) => {
    let item = getState().UploadInvoice.items.get(id);
    console.log(item);
    if (has(item, 'Quantity.value') && has(item, 'Price.value')) {
      let total = item.Quantity.value * item.Price.value;
      dispatch(updateItem(round(total, 2), "Total", id, {}));
    }
  };
}

export const UPLOAD_INVOICE_REQUEST = "UPLOAD_INVOICE_REQUEST";
export function uploadInvoiceRequest() {
  return {
    type: UPLOAD_INVOICE_REQUEST
  };
}

export const UPLOAD_INVOICE_SUCCESS = "UPLOAD_INVOICE_SUCCESS";
export function uploadInvoiceSuccess() {
  return {
    type: UPLOAD_INVOICE_SUCCESS
  };
}

export function clearUploadFormStateAndChangePage() {
  return (dispatch) => {
    dispatch(clearImage());
    dispatch(clearItems());
    dispatch(clearUploadFormFields());
    dispatch(push('/invoices'));
  };
}

export const UPLOAD_INVOICE = "UPLOAD_INVOICE";
export function uploadInvoice() {
  return (dispatch, getState) => {
    dispatch(uploadInvoiceRequest());
    fetch(URL + ':7004/api/invoices', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include',
      body: JSON.stringify(packageInvoiceForStorage(getState()))
    }).then((res) => res.json())
      .then((json) => dispatch(uploadInvoiceSuccess()))
      .then(() => dispatch(clearUploadFormStateAndChangePage()));
  };
}

export const REQUEST_BUSINESSES_NAMES = "REQUEST_BUSINESSES_NAMES";
export function getBusinessesNamesRequest() {
  return {
    type: REQUEST_BUSINESSES_NAMES
  };
}

export const SUCCESSS_BUSINESSES_NAMES = "SUCCESSS_BUSINESSES_NAMES";
export function getBusinessesNamesSuccess(businesses) {
  return {
    type: SUCCESSS_BUSINESSES_NAMES,
    businesses
  };
}

export const GET_BUSINESSES_NAMES = "GET_BUSINESSES_NAMES";
export function getBusinessesNames() {
  return (dispatch) => {
    dispatch(getBusinessesNamesRequest());
    fetch(URL + ':7004/api/businesses', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: "include"
    }).then((res) => res.json())
      .then((businesses) => {
        console.log(businesses.payload);
        return dispatch(getBusinessesNamesSuccess(businesses.payload));
      });
  };
}

export const REQUEST_INVOICE_DATA = "REQUEST_INVOICE_DATA";
export function invoiceDataRequest() {
  return {
    type: REQUEST_INVOICE_DATA
  }
}

export const GET_BUSINESS_DATA = "GET_BUSINESS_DATA";
export function getInvoiceData(business) {
  return (dispatch, getState) => {
    dispatch(invoiceDataRequest());
    let businesses = getState().UploadInvoice.businesses.names;
    let businessTag = businesses.filter(bsns => business === bsns.business);
    let id = businessTag[0]._id;
    fetch(URL + ':7004/api/businesses/data/' + id, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include',
    }).then(res => res.json())
      .then(json => {
        let business = json.business;
        let image = getState().UploadInvoice.image;
        dispatch(updateUploadForm('address', business.address));
        dispatch(guessInvoiceData(business.invoices, image));
      });
  }
}

export function guessInvoiceData(invoices, image) {
  return (dispatch) => {
    fetch(URL + ":9005/api/invoiceGuess", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({invoices, image})
    }).then(res => res.json())
      .then(json => {
        console.log(json);
      })
  };
}
