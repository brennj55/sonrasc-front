import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import UploadInvoiceContainer from '../containers/UploadInvoiceContainer';
import InvoiceGrid from '../components/Grid/InvoiceGrid';
import App from '../components/App';

const routes = (
  <Route path="/build/" component={App}>
    <Route path="/invoices/upload" component={UploadInvoiceContainer} />
    <Route path="/invoices" component={InvoiceGrid} />
  </Route>
);

export default routes;
