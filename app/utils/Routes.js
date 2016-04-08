import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import UploadInvoiceContainer from '../containers/Upload/UploadInvoiceContainer';
import InvoiceGridContainer from '../containers/Grid/InvoiceGridContainer';
import App from '../components/App';

import Invoice from '../components/Invoice/Invoice';

const routes = (
  <Route path="/build/" component={App}>
    <Route path="/invoices/upload" component={UploadInvoiceContainer} />
    <Route path="/invoices" component={InvoiceGridContainer} />
    <Route path="/invoices/:id" component={Invoice} />
  </Route>
);

export default routes;
