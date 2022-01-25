import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/rootReducer';
import { watchGetUsersRequest } from '../reducer/users/usersSaga';

export const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer(), enhancers);
  sagaMiddleware.run(watchGetUsersRequest);
  return store;
};

export default configureStore;
