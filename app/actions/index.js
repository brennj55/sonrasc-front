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
export function requestCroppedData(cropType) {
  return {
    type: REQUEST_CROPPED_DATA,
    cropType
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

export function fetchCroppedData(cropType, imageData) {
  return (dispatch, getState) => {
    if (shouldFetchCroppedData(getState())) {
      dispatch(requestCroppedData(cropType));
      socket.emit('image-cropping', {imageData: imageData});
      return socket.on('extracted-text', data => {
        console.log(data);
        dispatch(recieveCroppedData(cropType, data));
      });
    }
  };
}

export const SET_BUSINESS_FROM = "SET_BUSINESS_FROM";
export function setBusinessFrom(business) {
  return {
    type: SET_BUSINESS_FROM,
    business
  }
}

export const OPEN_CROPPING_DIALOG = "OPEN_CROPPING_DIALOG";
export function openCroppingDialog(cropType) {
  return {
    type: OPEN_CROPPING_DIALOG,
    cropType
  };
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
