import * as Constants from '../constants/add_users_constants';

const initialState = {
  users: []
}

const screenNames = ( state = initialState, action ) => {
  switch ( action.type ) {
    case Constants.ADD_SCREEN_NAMES:
      return Object.assign( {}, state, {
        users: [ action.user1ScreenName, action.user2ScreenName ]
      });
    default:
      return state
  };
};

export default screenNames;
