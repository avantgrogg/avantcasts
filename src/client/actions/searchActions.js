export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const SAVE_SEARCH_RESULT = 'SAVE_SEARCH_RESULT';
export const SAVE_RESULT = 'SAVE_RESULT';
export const UPDATE_PODCAST_LIST = 'UPDATE_PODCAST_LIST';

export function performSearch(term = '') {
    return {
        type: PERFORM_SEARCH,
        payload: {
            term
        }
    };
}

export function saveSearchResult(results = {}) {
    return {
        type: SAVE_SEARCH_RESULT,
        payload: {
            results
        }
    };
}

export function saveResult(result = {}) {
    return {
        type: SAVE_RESULT,
        payload: {
            result
        }
    };
}

export function updatePodcastList(podcast = {}) {
    return {
        type: UPDATE_PODCAST_LIST,
        payload: podcast
    };
}