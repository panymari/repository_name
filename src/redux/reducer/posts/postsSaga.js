import { call, put, takeLeading } from 'redux-saga/effects';
import { loading, setData, setError } from './postsSlice';
import { requestGetPosts } from './postsRequest';

function* handleGetPosts() {
  try {
    yield put(loading());
    const response = yield call(requestGetPosts);
    const { data } = response;
    yield put(setData({ ...data }));
  } catch (error) {
    yield put(setError(error));
  }
}
export function* postsWatcher() {
  yield takeLeading(setData.type, handleGetPosts);
}
