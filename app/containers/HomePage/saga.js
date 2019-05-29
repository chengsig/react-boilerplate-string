import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';

export function* getStrings() {
  const requestURL = 'http://localhost:3000/api/strings';
  try {
    const strings = yield call(request, requestURL);
    console.log(strings);
    yield put({ type: 'LOAD_STRINGS_SUCCEEDED', payload: strings });
  } catch (err) {
    yield put({ type: 'LOAD_STRING_FAILED', message: err.message });
  }
}

function* watchGetStrings() {
  yield takeEvery('LOAD_STRINGS', getStrings);
}

// Individual exports for testing
export default watchGetStrings;
