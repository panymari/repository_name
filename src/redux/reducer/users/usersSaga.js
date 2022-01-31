import { call, put, takeLeading } from 'redux-saga/effects';
<<<<<<< HEAD
import { loading, setData, setError } from './usersSlice';
import { requestGetUsers } from './usersRequest';

function* handleGetUsers() {
  try {
    yield put(loading());
    const response = yield call(requestGetUsers);
    const { data } = response;
    yield put(setData({ ...data }));
=======
import { takeEveryAsync } from 'saga-toolkit/sagaToolkit';
import * as actions from './usersSlice';
import * as api from './usersRequest';

export function* getUsers() {
  try {
    console.log(111);
    const result = yield call(api.usersRequest);
    yield put(actions.fetchThings.setData(result));
>>>>>>> e99c93d14a69913c4018d26af134902e14ee8861
  } catch (error) {
    yield put(setError(error));
  }
}
<<<<<<< HEAD
export function* usersWatcher() {
  yield takeLeading(setData.type, handleGetUsers);
=======

export function* watchGetUsersRequest() {
  yield takeLeading(actions.fetchThings.type, getUsers);
>>>>>>> e99c93d14a69913c4018d26af134902e14ee8861
}
