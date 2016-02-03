import React from 'react';
import { render } from 'react-dom';
import { reduxForm } from 'redux-form';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

import { App, InvoiceForm } from './containers/index.js';
import DevTools from './containers/DevTools.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// TODO: createStore(app, state_from_server).
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/invoices/upload-invoice" component={InvoiceForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);
