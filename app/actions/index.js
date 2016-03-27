import io from 'socket.io-client';
import { packageInvoiceForStorage } from '../utils/invoice.js';
import { has, round } from 'lodash';

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
  }
}

export const REMOVE_ITEM = "REMOVE_ITEM";
export function removeItemByID(key) {
  return {
    type: REMOVE_ITEM,
    key
  }
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

export const UPLOAD_INVOICE = "UPLOAD_INVOICE";
export function uploadInvoice() {
  return (dispatch, getState) => {
    //const DB_API_SOCKET = io.connect(location.hostname + ":7004");
    //let form = packageInvoiceForStorage(getState());
    //DB_API_SOCKET.emit('form-submit', form);
  };
}
