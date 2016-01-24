import React from 'react';
import { render } from 'react-dom';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

import DevTools from './containers/DevTools.js';

import textInvoiceUpload from './reducers/invoice.js';
import InvoiceForm from './components/InvoiceForm.js';

// TODO: createStore(app, state_from_server).
const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <InvoiceForm />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('container')
);
