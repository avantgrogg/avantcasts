import { connect } from 'react-redux';
import { SearchForm } from './searchForm';
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
            const resultId = event.target.getAttribute('data-collection-id');
            dispatch(saveResult(resultId));
        }
    };
};

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);