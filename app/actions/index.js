import io from 'socket.io-client';
const socket = io.connect('http://192.168.99.100:9005');

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

export function fetchCroppedData(type, imageData, boundary) {
  return (dispatch, getState) => {
    console.log(type);
    socket.emit('image-cropping', {imageData: imageData, cropType: type});
    socket.on('extracted-text', data => {
      socket.removeEventListener('extracted-text');
      console.log(data);
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
    type: ADD_NEW_ITEM
  }
}
