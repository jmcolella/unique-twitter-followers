import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { twitterFollowersApp } from '../reducers/combine_reducers';

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export default function configureStore() {
  return createStore(
    twitterFollowersApp,
    applyMiddleware( ...middleware )
  )
}
