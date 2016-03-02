import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SonrascApp from './reducers';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
let store = createStore(SonrascApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);

store.subscribe(() => {
  console.log(store.getState());
});
