import { connect } from 'react-redux';
import { Search } from '../components/search';
import $ from 'jquery';
import { performSearch, saveResult } from '../actions/searchActions';

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchSubmit: (event) => {
            event.preventDefault();
            const term = $('.js-search-input').val();
            dispatch(performSearch(term));
        },
        saveResult: (event) => {
            event.preventDefault();
            const resultId = event.target.getAttribute('data-key');
            dispatch(saveResult(resultId));
        }
    };
};

export const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);