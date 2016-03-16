import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SonrascApp from './reducers';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

import thunkMiddleware from 'redux-thunk';

const logger = store => next => action => {
  if (action.type !== "CROP_IMAGE") {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
  }
  else {
    return next(action);
  }
};

injectTapEventPlugin();
let store = createStore(SonrascApp,
  applyMiddleware(thunkMiddleware, logger)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
