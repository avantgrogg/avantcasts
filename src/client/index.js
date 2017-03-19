import React from 'react';
import { generateStore } from './store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { App } from './components/app';
import $ from 'jquery';
import "babel-polyfill";

let store = generateStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  $('#root')[0]
);