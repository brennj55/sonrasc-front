import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import UploadInvoice from './UploadInvoice';
import InvoiceGrid from './InvoiceGrid';
import Invoice from './Invoice';
import authenication from './Authenication';
import Dashboards from './Dashboards';

const SonrascApp = combineReducers({
  Dashboards,
  UploadInvoice,
  InvoiceGrid,
  Invoice,
  authenication,
  routing: routerReducer
});

export default SonrascApp;
