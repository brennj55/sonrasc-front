import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SonrascApp from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import thunkMiddleware from 'redux-thunk';
import logger from './utils/Logger';
import routes from './utils/Routes';

injectTapEventPlugin();
let store = createStore(SonrascApp,
  applyMiddleware(thunkMiddleware, logger)
);

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('container')
);
