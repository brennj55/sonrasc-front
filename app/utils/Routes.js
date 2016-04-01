import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import UploadInvoiceContainer from '../containers/UploadInvoiceContainer';
import InvoiceGrid from '../components/Grid/InvoiceGrid';
import Spinner from '../components/Layout/Spinner';
import App from '../components/App';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/test" component={Spinner} />
      <Route path="/invoices/upload" component={UploadInvoiceContainer} />
      <Route path="/invoices" component={InvoiceGrid} />
    </Route>
  </Router>
);

export default routes;
