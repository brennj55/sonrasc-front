import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import UploadInvoice from './UploadInvoice';
import InvoiceGrid from './InvoiceGrid';

const SonrascApp = combineReducers({
  UploadInvoice,
  InvoiceGrid,
  routing: routerReducer
});

export default SonrascApp;
