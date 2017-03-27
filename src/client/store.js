import { app } from './reducers/reducers';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { searchSaga, saveResultSaga } from './sagas/searchSagas';
import { showPodcastSaga, selectEpisodeSaga } from './sagas/podcastSagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
let initialState = {
    searchValue: '',
    podcasts: [],
    selected: {},
    player: {}
};

export function generateStore() {
    const store = createStore(app, initialState, applyMiddleware(logger, sagaMiddleware), initialState);
    sagaMiddleware.run(searchSaga);
    sagaMiddleware.run(saveResultSaga);
    sagaMiddleware.run(showPodcastSaga);
    sagaMiddleware.run(selectEpisodeSaga);
    return store;
}