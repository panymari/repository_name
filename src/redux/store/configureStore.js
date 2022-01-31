import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
<<<<<<< HEAD
import rootSaga from '../reducer/rootSaga';
import reducers from '../reducer/reducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
=======
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
>>>>>>> e99c93d14a69913c4018d26af134902e14ee8861

export default store;
