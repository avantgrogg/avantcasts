import { app } from './reducers/reducers';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { searchSaga } from './sagas/searchSagas';
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
let initialState = {
    searchValue: ''
};

export function generateStore() {
    const store = createStore(app, initialState, applyMiddleware(logger, sagaMiddleware));
    sagaMiddleware.run(searchSaga);
    return store;
}