import { combineReducers } from 'redux';
import {
  TOGGLE_CROPPING_DIALOG,
  SET_BUSINESS_FROM, SELECT_IMAGE, CLEAR_DIALOG,
  CROP_IMAGE_AREA, REQUEST_CROPPED_DATA, RECIEVE_CROPPED_DATA,
  UPDATE_UPLOAD_FORM
} from '../actions';
import Immutable from 'immutable';

function image(state = '', action) {
  switch (action.type) {
    case SELECT_IMAGE:
      return action.image;
    default:
      return state;
  }
}

let formInitialState = Immutable.Map();
function form(state = formInitialState, action) {
  switch (action.type) {
    case UPDATE_UPLOAD_FORM:
      return state.set(action.key, {value: action.value, boundary: action.boundary});

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
  cropImage
});

export default UploadInvoice;
