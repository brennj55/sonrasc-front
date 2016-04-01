import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import UploadInvoice from './UploadInvoice';

const SonrascApp = combineReducers({
  UploadInvoice,
  routing: routerReducer
});

export default SonrascApp;
