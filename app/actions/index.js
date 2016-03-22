import io from 'socket.io-client';
import { packageInvoiceForStorage } from '../utils/invoice.js';
const OCR_API_SOCKET = io.connect(location.hostname + ":" + process.env.WEB_OCR_API_PORT);
const DB_API_SOCKET = io.connect(location.hostname + ":7004");

export const SELECT_IMAGE = "SELECT_IMAGE";
export function selectImage(image) {
  return {
    type: SELECT_IMAGE,
    image
  };
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

function shouldFetchCroppedData(state) {
  if (state.UploadInvoice.cropImage.isFetching) return false;
  else return true;
}

function checkIfItem(type, data, dispatch) {
  if (type.includes('Item')) {
    let itemType = type.split('/');
    let ID = itemType.length - 2;
    let FIELD = itemType.length - 1;
    dispatch(update(data, itemType[FIELD], itemType[ID]));
  }
}

export function fetchCroppedData(type, imageData, boundary) {
  return (dispatch, getState) => {
    OCR_API_SOCKET.emit('image-cropping', {imageData: imageData, cropType: type});
    OCR_API_SOCKET.on('extracted-text', data => {
      OCR_API_SOCKET.removeEventListener('extracted-text');
      checkIfItem(type, data, dispatch);
      dispatch(updateUploadForm(type, data, boundary));
      dispatch(recieveCroppedData(type, data));
      dispatch(clearDialog());
    });
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
    type: ADD_NEW_ITEM,
  }
}

export function update(value, field, id) {
  return (dispatch, getState) => {
    dispatch(updateItem(value, field, id));
    dispatch(updateUploadForm("Item/" + id + "/" + field, value));
    if (field === 'Price' || field === 'Quantity') {
      let item = getState().UploadInvoice.items.get(id);
      dispatch(updateItem(item.Quantity * item.Price, 'Total', id));
      dispatch(updateUploadForm("Item/" + id + "/Total", item.Quantity * item.Price));
    }
  };
}

export const UPDATE_ITEM = "UPDATE_ITEM";
export function updateItem(value, field, id) {
  return {
    type: UPDATE_ITEM,
    value, field, id
  }
}

export const REMOVE_ITEM = "REMOVE_ITEM";
export function removeItemByID(key) {
  return {
    type: REMOVE_ITEM,
    key
  }
}

export const UPLOAD_INVOICE = "UPLOAD_INVOICE";
export function uploadInvoice() {
  return (dispatch, getState) => {
    let form = packageInvoiceForStorage(getState());
    DB_API_SOCKET.emit('form-submit', form);
  };
}
