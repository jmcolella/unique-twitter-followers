import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { twitterFollowersApp } from '../reducers/combine_reducers';
import App from '../containers/App';

ReactDOM.render(
  <Provider store={ createStore( twitterFollowersApp ) }>
    <App />
  </Provider>,
  document.getElementById( 'app' )
);
