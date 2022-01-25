import { call, put } from 'redux-saga/effects';
import { takeLeading } from 'saga-toolkit';
import * as actions from './usersSlice'
import * as api from './usersRequest';

function* getUsers() {
  try {
    const result = yield call(api.usersRequest);
    yield put(actions.fetchThings.setData(result));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetUsersRequest() {
  yield takeLeading(actions.fetchThings.type, fetchThings);
}


