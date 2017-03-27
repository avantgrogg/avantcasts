import { SAVE_SEARCH_RESULT, UPDATE_PODCAST_LIST } from '../actions/searchActions';
import { SAVE_SELECTED_EPS, ADD_EPISODE } from '../actions/podcastActions';

export function app(state = {}, action) {
    return {
        search: search(state.search, action),
        podcasts: podcasts(state.podcasts, action),
        selected: selected(state.selected, action),
        player: player(state.player, action)
    };
}

export function search(state = {}, action) {
    switch(action.type) {
    case SAVE_SEARCH_RESULT:
        return {
            results: action.payload.results
        };
    default:
        return state;
    }
}

export function podcasts(state = [], action) {
    switch(action.type) {
    case UPDATE_PODCAST_LIST:
        return state.slice().concat([action.payload]);
    default:
        return state;
    }
}

export function selected(state = {}, action) {
    switch(action.type) {
    case SAVE_SELECTED_EPS:
        return {
            podcastInfo: action.payload.podcastInfo,
            episodes: action.payload.episodes
        };
    default:
        return state;
    }
}

export function player(state = {}, action) {
    switch(action.type) {
    case ADD_EPISODE:
        return {
            episode: action.payload.episode
        };
    }
}
