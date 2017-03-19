import { put, call, takeEvery } from 'redux-saga/effects';
import { saveSearchResult } from '../actions/searchActions';

function* fetchSearchTerm(action) {
   try {
      const results = yield call(fetchTerm, action.payload.term);
      yield put(saveSearchResult(results));
   } catch (e) {
     console.log(e);
      throw new Error('something went wrong');
   }
}

export function* searchSaga() {
  yield takeEvery("PERFORM_SEARCH", fetchSearchTerm);
}

function fetchTerm(term) {
    return fetch(`/api/search/${term}`).then(res => res.json());
}