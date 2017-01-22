import fetch from 'isomorphic-fetch';
import * as Constants from '../constants/following_constants';
import Promise from 'bluebird';

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
    return Promise.all( users.map( ( u ) => {
      dispatch( requestFollowing( u ) );
      return fetch( `https://uniqtweet-backend.herokuapp.com/search?screen_name=${u}` )
      .then( (response, data) => {
        return response.json()
        .then( json => {
          return dispatch( receiveFollowing( u, json ) );
        })
        .catch( ( error ) => {
          return dispatch( twitterError( u ) );
        });
      });
    }))
  }
}
