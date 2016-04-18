import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import UploadInvoiceContainer from '../containers/Upload/UploadInvoiceContainer';
import InvoiceGridContainer from '../containers/Grid/InvoiceGridContainer';
import App from '../components/App';

import requireAuthentication from '../containers/AuthenicateComponent';

import InvoiceContainer from '../containers/Invoice/InvoiceContainer';
import LoginContainer from '../containers/Login/LoginContainer';
import RegisterContainer from '../containers/Login/RegisterContainer';

const routes = (
  <Route path="/build/" component={App}>
    <IndexRoute component={LoginContainer} />
    <Route path="/register" component={RegisterContainer} />
    <Route path="/invoices/upload" component={requireAuthentication(UploadInvoiceContainer)} />
    <Route path="/invoices" component={InvoiceGridContainer} />
    <Route path="/invoices/:id" component={InvoiceContainer} />
  </Route>
);

export default routes;
