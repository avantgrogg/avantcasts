import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';

export const Podcasts = ({ state, showPodcast }) => (
  <div>
    <div className="columns is-multiline is-gapless">
      {get(state, 'podcasts', []).map((podcast, idx) => {
          return <div className="column is-half" key={idx}>
                    <Link to={`/podcast/${podcast.collectionName}`} data-key={idx} onClick={e => showPodcast(e)}><span><img data-key={idx} src={podcast.artwork}></img></span></Link>
                </div>;
      })}
    </div>
  </div>
);