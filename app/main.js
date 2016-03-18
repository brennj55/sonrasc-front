import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SonrascApp from './reducers';
import App from './components/App';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import thunkMiddleware from 'redux-thunk';

import UploadInvoiceContainer from './containers/UploadInvoiceContainer';

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
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/invoices/upload-invoice" component={UploadInvoiceContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);
