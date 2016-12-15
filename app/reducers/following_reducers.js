import * as Constants from '../constants/following_constants';
import followingHelpers from '../utils/following_helpers';


export const following = ( state = {
  user1Compare: [],
  user2Compare: []
}, action ) => {
  switch ( action.type ) {
    case Constants.REQUEST_FOLLOWING:
      return Object.assign( {}, state, {
        [action.user]: followingHelpers.fetching( state[action.user], action )
      });
    case Constants.RECEIVE_FOLLOWING:
      return Object.assign( {}, state, {
        [action.user]: followingHelpers.fetching( state[action.user], action )
      })
    case Constants.COMPARE_FOLLOWING:
      return Object.assign( {}, state, {
        user1Compare: followingHelpers.compare( action.user1, action.user2 ),
        user2Compare: followingHelpers.compare( action.user2, action.user1 )
      });
    default:
      return state
  }
}
