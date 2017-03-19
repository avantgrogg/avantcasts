import { SAVE_SEARCH_RESULT } from '../actions/searchActions';

export function app(state = {}, action) {
    return {
        search: search(state.search, action)
    };
}

function search(state = {}, action) {
    switch(action.type) {
        case SAVE_SEARCH_RESULT:
            return {
                results: action.payload.results
            }
        default:
            return state;
    }
}
