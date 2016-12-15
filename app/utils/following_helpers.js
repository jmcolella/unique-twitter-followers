import * as Constants from '../constants/following_constants';

function fetchingHelper ( state = {
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

function compareHelper ( first, second ) {
  let compareArr = [];

  for ( let i = 0; i < first.length; i++ ) {
    if ( !( second.includes( first[i] ) ) ) {
      compareArr.push( first[i] );
    }
  }

  return compareArr;
}


const followingHelpers = {
  fetching: fetchingHelper,
  compare: compareHelper
}

export default followingHelpers;
