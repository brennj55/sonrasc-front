import { combineReducers } from 'redux';
import {
  TOGGLE_CROPPING_DIALOG, SELECT_IMAGE, CLEAR_DIALOG,
  CROP_IMAGE_AREA, REQUEST_CROPPED_DATA, RECIEVE_CROPPED_DATA,
  UPDATE_UPLOAD_FORM, ADD_NEW_ITEM, REMOVE_ITEM, UPDATE_ITEM,
  UPLOAD_INVOICE_REQUEST, UPLOAD_INVOICE_SUCCESS, REQUEST_BUSINESSES_NAMES,
  SUCCESSS_BUSINESSES_NAMES, REQUEST_INVOICE_DATA
} from '../actions';
import Immutable from 'immutable';
import { pick, range } from 'lodash';

export function image(state = '', action) {
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
export function items(state = itemsInitialState, action) {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return state.push({});

    case UPDATE_ITEM:
      return state.update(action.id, (obj) => {
        return Object.assign({}, obj, {[action.field]: {value: action.value, boundary: action.boundary}});
      });

    case REMOVE_ITEM:
        return state.delete(action.key);

      default:
        return state;
  }
}

let itemsByIdInitialState = [];
function itemsById(state = itemsByIdInitialState, action) {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return range(state.length + 1);

    case REMOVE_ITEM:
      return range(state.length - 1);

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

const uploadInvoiceInitialState = {
  isUploading: false,
  uploaded: false
};

function upload(state = uploadInvoiceInitialState, action) {
  switch (action.type) {
    case UPLOAD_INVOICE_REQUEST:
      return { isUploading: true, uploaded: false };

    case UPLOAD_INVOICE_SUCCESS:
      return { isUploading: false, uploaded: true };

    default:
      return state;
  }
}

const businessesInitalState = {
  isFetching: false,
  names: []
};

function businesses(state = businessesInitalState, action) {
  switch (action.type) {
    case REQUEST_BUSINESSES_NAMES:
      return {
        isFetching: true, names: []
      };

    case SUCCESSS_BUSINESSES_NAMES:
      return {
        isFetching: false, names: action.businesses
      };

    default:
      return state;
  }
}

function getInvoiceData(state = { fetching: false }, action) {
  switch (action.type) {

    case REQUEST_INVOICE_DATA:
      return { fetching: true }

    default:
      return state;
  }
}

const UploadInvoice = combineReducers({
  image,
  form,
  cropImage,
  items,
  itemsById,
  upload,
  businesses,
  getInvoiceData
});

export default UploadInvoice;
