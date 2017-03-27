import React from 'react';
import { get } from 'lodash';

export const Podcast = ({ state, selectEpisode }) => (
  <div className="columns">
    <div className="column">
    <table className="table">
      <thead>
        <tr>
          <th>Episode#</th>
          <th>Description</th>
          <th>Play</th>
        </tr>
      </thead>
      <tbody>
        {get(state, 'selected.episodes', []).map((episode, idx) => {
          return <tr onClick={e => selectEpisode(e)} data-key={idx} key={idx}>
                    <th data-key={idx}>{idx}</th>
                    <th data-key={idx}>{episode.title}</th>
                    <th data-key={idx}><a href="">Play</a></th>
                  </tr>;
        })}
      </tbody>
    </table>
    </div>
  </div>
);