import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import UploadInvoice from './UploadInvoice';
import InvoiceGrid from './InvoiceGrid';
import BusinessGrid from './BusinessGrid';
import Invoice from './Invoice';
import Authenication from './Authenication';
import navigationMenu from './NavigationMenu';
import Dashboards from './Dashboards';
import Business from './Business';

const SonrascApp = combineReducers({
  navigationMenu,
  Dashboards,
  Business,
  UploadInvoice,
  InvoiceGrid,
  BusinessGrid,
  Invoice,
  Authenication,
  routing: routerReducer
});

export default SonrascApp;
