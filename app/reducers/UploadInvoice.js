import { combineReducers } from 'redux';
import {
  OPEN_CROPPING_DIALOG, TOGGLE_CROPPING_DIALOG,
  SET_BUSINESS_FROM, SELECT_IMAGE, CLEAR_DIALOG,
  CROP_IMAGE_AREA, REQUEST_CROPPED_DATA, RECIEVE_CROPPED_DATA,
  UPDATE_UPLOAD_FORM
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
  cropType: '',
  boundary: {},
  isFetching: false,
  data: {},
  open: false
};

function form(state = {}, action) {
  switch (action.type) {
    case UPDATE_UPLOAD_FORM:
      return Object.assign({}, state, {
        [action.key]: {value: action.value, boundary: action.boundary}
      });

    default:
      return state;
  }
}

function cropImage(state = cropImageInitialState, action) {
  switch (action.type) {

    case CROP_IMAGE_AREA:
      return Object.assign({}, state, {
        boundary: action.boundary,
        imageData: action.imageData
      });

    case REQUEST_CROPPED_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });

    case CLEAR_DIALOG:
      return cropImageInitialState;

    case RECIEVE_CROPPED_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        data: Object.assign({}, state.data, {[action.cropType]: action.data}),
        lastUpdated: action.recievedAt
      });

    case OPEN_CROPPING_DIALOG:
      return Object.assign({}, state, {
        open: true,
        cropType: action.cropType
      });

    case TOGGLE_CROPPING_DIALOG:
      return Object.assign({}, state, {
        open: !state.open,
        cropType: action.cropType
      });

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
  form,
  cropImage,
  business
});

export default UploadInvoice;
