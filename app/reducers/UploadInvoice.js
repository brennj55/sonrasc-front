import { combineReducers } from 'redux';
import { uploadInvoice as actions } from '../actions';
import Immutable from 'immutable';
import { pick, range } from 'lodash';

export function suggestions(state = {fetching: false, open: false, message: '', suggestions: {}}, action) {
  switch (action.type) {

    case actions.GET_INVOICE_SUGGESTIONS:
      return Object.assign({}, state, {fetching: true, open: true, message: action.message });

    case actions.RECIEVED_INVOICE_SUGGESTIONS:
      return Object.assign({}, state, {fetching: false, open: true,
        suggestions: action.data, message: action.message });

    case actions.CLOSE_NOTIFICATION_BAR:
      return Object.assign({}, state, {open: false});

    default:
      return state;
  }
}

export function image(state = '', action) {
  switch (action.type) {
    case actions.SELECT_IMAGE:
      return action.image;

    case actions.CLEAR_IMAGE:
      return '';

    default:
      return state;
  }
}

let formInitialState = Immutable.Map();
function form(state = formInitialState, action) {
  switch (action.type) {
    case actions.UPDATE_UPLOAD_FORM:
      return state.set(action.key, {value: action.value, boundary: action.boundary});

    case actions.CLEAR_UPLOAD_FORM:
      return formInitialState;

    default:
      return state;
  }
}

let itemsInitialState = Immutable.List();
export function items(state = itemsInitialState, action) {
  switch (action.type) {
    case actions.ADD_NEW_ITEM:
      return state.push({});

    case actions.UPDATE_ITEM:
      return state.update(action.id, (obj) => {
        return Object.assign({}, obj, {[action.field]: {value: action.value, boundary: action.boundary}});
      });

    case actions.REMOVE_ITEM:
      return state.delete(action.key);

    case actions.CLEAR_ITEMS:
      return itemsInitialState;

    default:
      return state;
  }
}

let itemsByIdInitialState = [];
function itemsById(state = itemsByIdInitialState, action) {
  switch (action.type) {
    case actions.ADD_NEW_ITEM:
      return range(state.length + 1);

    case actions.REMOVE_ITEM:
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

    case actions.CROP_IMAGE_AREA:
      return Object.assign({}, state, {
        boundary: action.boundary,
        imageData: action.imageData
      });

    case actions.REQUEST_CROPPED_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });

    case actions.CLEAR_DIALOG:
      return cropImageInitialState;

    case actions.RECIEVE_CROPPED_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        data: Object.assign({}, state.data, {[action.cropType]: action.data}),
        lastUpdated: action.recievedAt
      });

    case actions.TOGGLE_CROPPING_DIALOG:
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
    case actions.UPLOAD_INVOICE_REQUEST:
      return { isUploading: true, uploaded: false };

    case actions.UPLOAD_INVOICE_SUCCESS:
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
    case actions.REQUEST_BUSINESSES_NAMES:
      return {
        isFetching: true, names: []
      };

    case actions.SUCCESSS_BUSINESSES_NAMES:
      return {
        isFetching: false, names: action.businesses
      };

    default:
      return state;
  }
}

function invoiceData(state = { fetching: false }, action) {
  switch (action.type) {

    case actions.REQUEST_INVOICE_DATA:
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
  suggestions,
  invoiceData
});

export default UploadInvoice;
