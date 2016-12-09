import { combineReducers } from 'redux';
import screenNames from './add_users_reducers';
import { following } from './following_reducers';

export const twitterFollowersApp = combineReducers({
  screenNames,
  following
});
