import { combineReducers } from 'redux';
import handles from './add_handles_reducers';
import { following } from './following_reducers';

export const twitterFollowersApp = combineReducers({
  handles,
  following
});
