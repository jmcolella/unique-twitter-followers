import * as Constants from '../constants/following_constants';

function followingHelper ( state = {
  isFetching: false,
  following: []
}, action ) {
  switch ( action.type ) {
    case Constants.REQUEST_FOLLOWING:
      return Object.assign( {}, state, {
        isFetching: true
      });
    case Constants.RECEIVE_FOLLOWING:
      return Object.assign( {}, state, {
        isFetching: false,
        following: action.followingList
      });
    default:
      return state
  }
}

export const following = ( state = {}, action ) => {
  switch ( action.type ) {
    case Constants.REQUEST_FOLLOWING:
      return Object.assign( {}, state, {
        [action.user]: followingHelper( state[action.user], action )
      });
    case Constants.RECEIVE_FOLLOWING:
      return Object.assign( {}, state, {
        [action.user]: followingHelper( state[action.user], action )
      })
    default:
      return state
  }
}
