import fetch from 'isomorphic-fetch';
import * as Constants from '../constants/following_constants';

function requestFollowing ( user ) {
  return {
    type: Constants.REQUEST_FOLLOWING,
    user
  }
};

function receiveFollowing ( user, json ) {
  return {
    type: Constants.RECEIVE_FOLLOWING,
    followingList: json.array,
    user
  }
};

export function fetchFollowing ( users ) {
  return dispatch => {
    users.map( u => {
      dispatch( requestFollowing( u ) );
      return fetch( `http://localhost:3000/search?screen_name=${u}` )
        .then( (response, data) => {
          response.json()
          .then( json => {
            dispatch( receiveFollowing( u, json ) )
          })
      });
    });
  }
}
