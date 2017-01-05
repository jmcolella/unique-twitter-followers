import * as Constants from '../constants/following_constants';
import followingHelpers from '../utils/following_helpers';

const initialState = {
  loading: true,
  user1Compare: [],
  user2Compare: []
};

export const following = ( state = initialState, action ) => {
  switch ( action.type ) {
    case Constants.REQUEST_FOLLOWING:
    case Constants.RECEIVE_FOLLOWING:
      return Object.assign( {}, state, {
        [action.user]: followingHelpers.fetching( state[action.user], action )
      });
    case Constants.COMPARE_FOLLOWING:
      return Object.assign( {}, state, {
        user1Compare: followingHelpers.compare( action.user1, action.user2 ),
        user2Compare: followingHelpers.compare( action.user2, action.user1 ),
        loading: false
      });
    case Constants.TWITTER_ERROR:
      return Object.assign( {}, state, {
         [action.user]: followingHelpers.error( state[action.user], action ),
         loading: false
      })
    default:
      return state
  }
}
