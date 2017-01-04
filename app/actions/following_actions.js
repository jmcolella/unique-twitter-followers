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

export function twitterError( user ) {
  return {
    type: Constants.TWITTER_ERROR,
    user
  }
};

export function compareFollowing( user1, user2 ) {
  return {
    type: Constants.COMPARE_FOLLOWING,
    user1,
    user2
  }
};

export function fetchFollowing ( users ) {
  return dispatch => {
    users.map( u => {
      dispatch( requestFollowing( u ) );
      return fetch( `https://uniqtweet-backend.herokuapp.com/search?screen_name=${u}` )
        .then( (response, data) => {
          response.json()
          .then( json => {
            dispatch( receiveFollowing( u, json ) )
          })
        .catch( ( error ) => {
          dispatch( twitterError( u ) )
        });
      })
    });
  }
}
