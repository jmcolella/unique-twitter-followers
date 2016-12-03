import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { twitterFollowersApp } from '../reducers/combine_reducers';
import App from '../containers/App';

const routes = (
  <Provider store={ createStore( twitterFollowersApp ) }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App } />
    </Router>
  </Provider>
);

export default routes;
