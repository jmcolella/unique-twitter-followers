import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configure_store';
import App from '../containers/App';
import Index from '../components/Index';
import AddScreenNames from '../containers/AddScreenNames';
import FollowingLists from '../containers/FollowingLists';

const store = configureStore();

const routes = (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Index } />
        <Route path='/handles' component={ AddScreenNames } />
        <Route path="/following_lists" component={ FollowingLists } />
      </Route>
    </Router>
  </Provider>
);

export default routes;
