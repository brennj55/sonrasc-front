import { combineReducers } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import UploadInvoice from './UploadInvoice';

const SonrascApp = combineReducers({
  UploadInvoice,
  router: routerStateReducer
});

export default SonrascApp;
