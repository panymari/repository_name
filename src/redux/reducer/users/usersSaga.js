import { call, put, takeLeading } from 'redux-saga/effects';
import { takeEveryAsync } from 'saga-toolkit/sagaToolkit';
import * as actions from './usersSlice';
import * as api from './usersRequest';

export function* getUsers() {
  try {
    console.log(111);
    const result = yield call(api.usersRequest);
    yield put(actions.fetchThings.setData(result));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetUsersRequest() {
  yield takeLeading(actions.fetchThings.type, getUsers);
}
