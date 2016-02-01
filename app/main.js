import React from 'react';
import { render } from 'react-dom';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

import './styles/main.css';
import { StyleRoot } from 'radium';

import Header from './components/Header.js';

import DevTools from './containers/DevTools.js';
import InvoiceForm from './containers/InvoiceForm/InvoiceForm.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// TODO: createStore(app, state_from_server).
const store = configureStore();

render(
  <Provider store={store}>
    <StyleRoot>
      <Header />
      <div id="appContainer">
        <InvoiceForm />

      </div>
    </StyleRoot>
  </Provider>,
  document.getElementById('container')
);

//<DevTools />
