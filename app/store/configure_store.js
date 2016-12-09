import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { twitterFollowersApp } from '../reducers/combine_reducers';

const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    twitterFollowersApp,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
