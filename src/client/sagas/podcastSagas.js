import { SHOW_PODCAST, saveSelectedEps, SELECT_EPS, addEpisode } from '../actions/podcastActions';
import { takeEvery, put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { get } from 'lodash';

export function* showPodcastSaga() {
    yield takeEvery(SHOW_PODCAST, getPodcastEps);
}

export function* selectEpisodeSaga() {
    yield takeEvery(SELECT_EPS, addEpisodeToPlayer);
}

export function* getPodcastEps(action) {
    const state = yield select();
    const selectedPodcast = getSelectedPodcast(state.podcasts, action.payload.idx);
    const podcastEps = yield call(getPodcastFeed, selectedPodcast.feedUrl);
    yield put(saveSelectedEps(selectedPodcast, podcastEps));
}

export function* addEpisodeToPlayer(action) {
    const episodeIndex = action.payload.idx;
    const state = yield select();
    const episode = get(state, `selected.episodes.${episodeIndex}`, {});
    yield put(addEpisode(episode));
}

export function getSelectedPodcast(podcasts = [], index) {
    return podcasts[index];
}

function getPodcastFeed(podcastUrl) {
    return fetch('/api/getfeed', {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
            'charset':'utf-8'
        }),
        body: JSON.stringify({podcastUrl})
    }).then(res => res.json());
}