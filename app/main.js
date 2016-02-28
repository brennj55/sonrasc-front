import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import { App, InvoiceForm, CropImage } from './containers/index.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/invoices/upload-invoice" component={InvoiceForm} />
        <Route path="/invoices/crop-test" component={CropImage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);
