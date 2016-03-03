import { combineReducers } from 'redux';
import {
  OPEN_CROPPING_DIALOG, TOGGLE_CROPPING_DIALOG,
  SET_BUSINESS_FROM, SELECT_IMAGE,
  CROP_IMAGE_AREA, REQUEST_CROPPED_DATA, RECIEVE_CROPPED_DATA
} from '../actions';

function image(state = '', action) {
  switch (action.type) {
    case SELECT_IMAGE:
      return action.image;
    default:
      return state;
  }
}

const cropImageInitialState = {
  targetArea: '',
  boundary: {},
  isFetching: false,
  data: {}
};

function cropImage(state = cropImageInitialState, action) {
  switch (action.type) {

    case CROP_IMAGE_AREA:
      return Object.assign({}, state, {
        targetArea: action.targetArea,
        boundary: action.boundary,
        imageData: action.imageData
      });

    case REQUEST_CROPPED_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECIEVE_CROPPED_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        imageData: action.imageData,
        lastUpdated: action.recievedAt
      });

    default:
      return state;
  }
}

function dialogVisibilityOfCropImageTool(state = {
  open: false, cropType: ""}, action) {
  switch (action.type) {
    case OPEN_CROPPING_DIALOG:
      return {open: true, cropType: action.cropType};

    case TOGGLE_CROPPING_DIALOG:
      return {open: !state.open, cropType: action.cropType};

    default:
      return state;
  }
}

function business(state = "", action) {
  switch (action.type) {
    case SET_BUSINESS_FROM:
      return action.business

    default:
      return state;
  }
}

const UploadInvoice = combineReducers({
  image,
  cropImage,
  business,
  dialogVisibilityOfCropImageTool
});

export default UploadInvoice;
