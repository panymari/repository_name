import { call, put, takeLeading } from 'redux-saga/effects';
import { loading, setData, setError } from './usersSlice';
import { requestGetUsers } from './usersRequest';

function* handleGetUsers() {
  try {
    yield put(loading());
    const response = yield call(requestGetUsers);
    const { data } = response;
    yield put(setData([...data]));
  } catch (error) {
    yield put(setError(error));
  }
}
export function* usersWatcher() {
  yield takeLeading(setData.type, handleGetUsers);
}
