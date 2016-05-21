import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import UploadInvoiceContainer from '../containers/Upload/UploadInvoiceContainer';
import InvoiceGridContainer from '../containers/Grid/InvoiceGridContainer';
import BusinessesContainer from '../containers/Businesses/BusinessesContainer';
import BusinessContainer from '../containers/Businesses/BusinessContainer';

import AppContainer from '../containers/AppContainer';

import requireAuthentication from '../containers/AuthenicateComponent';
import InvoiceContainer from '../containers/Invoice/InvoiceContainer';
import LoginContainer from '../containers/Login/LoginContainer';
import RegisterContainer from '../containers/Login/RegisterContainer';
import DashboardsContainer from '../containers/Dashboards/DashboardsContainer';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={LoginContainer} />
    <Route path="/register" component={RegisterContainer} />
    <Route path="/dashboards" component={requireAuthentication(DashboardsContainer)} />
    <Route path="/businesses/:id" component={requireAuthentication(BusinessContainer)} />
    <Route path="/businesses" component={requireAuthentication(BusinessesContainer)} />
    <Route path="/upload" component={requireAuthentication(UploadInvoiceContainer)} />
    <Route path="/invoices" component={requireAuthentication(InvoiceGridContainer)} />
    <Route path="/invoices/:id" component={requireAuthentication(InvoiceContainer)} />
  </Route>
);

export default routes;
