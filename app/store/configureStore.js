import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index.js';
import DevTools from '../containers/DevTools';

const finalCreateStore = compose(
  // Middleware you want to use in development:
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers/index.js', () =>
      store.replaceReducer(require('../reducers/index.js')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
