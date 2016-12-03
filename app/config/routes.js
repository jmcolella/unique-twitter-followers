import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { twitterFollowersApp } from '../reducers/combine_reducers';
import App from '../containers/App';
import AddScreenNames from '../containers/AddScreenNames';
import FollowingLists from '../containers/FollowingLists';

const routes = (
  <Provider store={ createStore( twitterFollowersApp ) }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ AddScreenNames } />
        <Route path="/following_lists" component={ FollowingLists } />
      </Route>
    </Router>
  </Provider>
);

export default routes;
