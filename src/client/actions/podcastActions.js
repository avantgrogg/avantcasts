export const SHOW_PODCAST = 'SHOW_PODCAST';
export const SAVE_SELECTED_EPS = 'SAVE_SELECTED_EPS';
export const SELECT_EPS = 'SELECT_EPS';
export const ADD_EPISODE = 'ADD_EPISODE';

export function showPodcast(idx) {
    return { 
        type: SHOW_PODCAST,
        payload: {
            idx
        }
    };
}

export function saveSelectedEps(podcastInfo, episodes) {
    return {
        type: SAVE_SELECTED_EPS,
        payload: {
            podcastInfo,
            episodes
        }
    };
}

export function selectEps(idx) {
    return {
        type: SELECT_EPS,
        payload: {
            idx
        }
    };
}

export function addEpisode(episode) {
    return {
        type: ADD_EPISODE,
        payload: {
            episode
        }
    };
}