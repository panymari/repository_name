import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../reducer/rootSaga';
import reducers from '../reducer/reducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
