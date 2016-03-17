import { combineReducers } from 'redux';
import {
  TOGGLE_CROPPING_DIALOG, SELECT_IMAGE, CLEAR_DIALOG,
  CROP_IMAGE_AREA, REQUEST_CROPPED_DATA, RECIEVE_CROPPED_DATA,
  UPDATE_UPLOAD_FORM, ADD_NEW_ITEM, REMOVE_ITEM, UPDATE_ITEM
} from '../actions';
import Immutable from 'immutable';
import { pick } from 'lodash';

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

let itemsInitialState = Immutable.List();
function items(state = itemsInitialState, action) {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return state.set(state.size, {});

    case UPDATE_ITEM:
      return state.updateIn([action.id], (object) =>
        Object.assign({}, object, {[action.field]: action.value})
      );

    case REMOVE_ITEM:
        return state.delete(action.key);

      default:
        return state;
  }
}

let itemsByIdInitialState = Immutable.List();
function itemsById(state = itemsByIdInitialState, action) {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return state.set(state.size);

    case REMOVE_ITEM:
      return state.delete(action.key);

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

const UploadInvoice = combineReducers({
  image,
  form,
  cropImage,
  items,
  itemsById
});

export default UploadInvoice;
