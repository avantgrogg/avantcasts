import { put, call, takeEvery, select } from 'redux-saga/effects';
import { PERFORM_SEARCH, SAVE_RESULT, saveSearchResult, updatePodcastList } from '../actions/searchActions';

function* fetchSearchTerm(action) {
    try {
        const results = yield call(fetchTerm, action.payload.term);
        yield put(saveSearchResult(results));
    } catch (e) {
        throw new Error('something went wrong');
    }
}

function* saveSelectedPodcast(action) {
    const podcastData = yield getPodcastData(action.payload.result);
    try {
        const savedPodcast = yield call(savePodcast, podcastData);
        yield put(updatePodcastList(savedPodcast));
    } catch (e) {
        console.log(e);
        throw new Error('podcast failed to save');
    }
  //fetch post to results, /api/saveResult
  //should return updated user favorites list
  //then need to save to store
}

export function* searchSaga() {
    yield takeEvery(PERFORM_SEARCH, fetchSearchTerm);
}

export function* saveResultSaga() {
    yield takeEvery(SAVE_RESULT, saveSelectedPodcast);
}

function fetchTerm(term) {
    return fetch(`/api/search/${term}`).then(res => res.json());
}

function savePodcast(podcastData) {
    return fetch('/api/savepodcast', {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
            'charset':'utf-8'
        }),
        body: JSON.stringify({podcastData})
    }).then(res => res.json());
}

function* getPodcastData(index) {
    const state = yield select();
    return state.search.results[index];

}


