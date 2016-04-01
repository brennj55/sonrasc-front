import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SonrascApp from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory, Router } from 'react-router';
import { createHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import logger from './utils/Logger';
import routes from './utils/Routes';

injectTapEventPlugin();
let store = createStore(SonrascApp,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('container')
);
