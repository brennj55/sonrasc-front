
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
    data: json.data.children.map(child => child.data),
    recievedAt: Date.now()
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
