import React from 'react';
import { get } from 'lodash';

export const Search = ({ state, onSearchSubmit, saveResult }) => (
  <div>
    <form onSubmit={e => onSearchSubmit(e)}>
        <h1>Search Form</h1>
        <input type="search" className='js-search-input'></input>
        <button name="submit" className='js-submit-search'></button>
    </form>
    <h1>{ get(state, 'search.results.resultCount', '') }</h1>
    <div className="columns is-multiline">
      {get(state, 'search.results', []).map((result, idx) => {
        return <div className="column is-4" key={idx}>
                <form onSubmit={e => saveResult(e)} data-collection-id={result.collectionId} data-key={idx}>
                  <img src={result.artwork}></img>
                  <span>{result.collectionName}</span>
                  <button name="submit" className="js-save-result">Save</button>
                </form>
              </div>;
      })}
    </div>
  </div>
);