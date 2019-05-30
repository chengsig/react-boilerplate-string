import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringLoadingError } from 'containers/App/actions';

import request from 'utils/request';

// strings request/response handler
export function* getStrings() {
  const requestURL = 'http://localhost:5000/api/strings';
  try {
    const strings = yield call(request, requestURL);
    console.log('finally got them in saga', strings)
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringLoadingError(err));
  }
}

// root saga manages watcher lifecycle
export default function* stringsData() {
  yield takeLatest(LOAD_STRINGS, getStrings);
}
