import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index.js';
import DevTools from '../containers/DevTools';

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers/index.js', () =>
      store.replaceReducer(require('../reducers/index.js')/*.default if you use Babel 6+ */)
    );
  }
  return store;
}
