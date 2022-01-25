import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/rootReducer';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer(), enhancers);

  return store;
};

export default configureStore;
