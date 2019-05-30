/**
 * POST the string to database
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { stringLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { ADD_STRING } from './constants';
import { addString } from './actions';

/**
 * strings API request/response handler
 */
export function* postString(string) {
  const requestURL = `https://localhost:5000/api/strings`;

  try {
    // post our request helper (see 'utils/request')
    const res = yield call(request, requestURL, {
      method: 'POST',
      body: { string },
    });
    console.log('in addform saga', res);
    yield put(addString(string));
  } catch (err) {
    yield put(stringLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* addStringData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_STRING, postString);
}
