import fetch from 'isomorphic-fetch';
import * as Constants from '../constants/following_constants';

export function requestFollowing ( user ) {
  return {
    type: Constants.REQUEST_FOLLOWING,
    user
  }
};

export function receiveFollowing ( user, json ) {
  return {
    type: Constants.RECEIVE_FOLLOWING,
    followingList: json.array,
    user
  }
};

export function compareFollowing( user1, user2 ) {
  return {
    type: Constants.COMPARE_FOLLOWING,
    user1,
    user2
  }
}

export function fetchFollowing ( users ) {
  return dispatch => {
    users.map( u => {
      dispatch( requestFollowing( u ) );
      return fetch( `http://localhost:3000/search?screen_name=${u}` )
        .then( (response, data) => {
          if ( response.ok ) {
            response.json()
            .then( json => {
              dispatch( receiveFollowing( u, json ) )
            });
          } else {
            // NEED TO HANDLE TWITTER TIMEOUTS
          }
      })
      .catch( ( error ) => {
        debugger;
      });
    });
  }
}
