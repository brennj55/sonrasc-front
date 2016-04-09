import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import UploadInvoice from './UploadInvoice';
import InvoiceGrid from './InvoiceGrid';
import Invoice from './Invoice';

const SonrascApp = combineReducers({
  UploadInvoice,
  InvoiceGrid,
  Invoice,
  routing: routerReducer
});

export default SonrascApp;
