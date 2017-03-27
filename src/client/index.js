import React from 'react';
import { generateStore } from './store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import $ from 'jquery';
import "babel-polyfill";
import '../scss/main.scss';
import 'bulma';

import { Route, BrowserRouter as Router, browserHistory } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

import { SearchContainer as Search } from './containers/searchContainer';
import { PodcastsContainer as Podcasts } from './containers/podcastsContainer';
import { PodcastContainer as Podcast } from './containers/podcastContainer';
import { PlayerContainer as Player } from './containers/playerContainer';

let store = generateStore();
window.__store = store;
render(
  <Provider store={store}>
    <div>
      <Router>
          <div className="columns">
            <div className="column is-2">
              <Podcasts/>
            </div>
            <div className="column">
              <Route path="/search" component={Search}/>
              <Route path="/podcast/:id" component={Podcast}/>
            </div>
            <div className="column is-3">
              <Player/>
            </div>
          </div>
      </Router>
    </div>
  </Provider>,
  $('#root')[0]
);