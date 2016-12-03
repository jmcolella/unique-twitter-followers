import * as Constants from '../constants/add_users_constants';

const initialState = {
  user1: "",
  user2: ""
}

const screenNames = ( state = initialState, action ) => {
  switch ( action.type ) {
    case Constants.ADD_SCREEN_NAMES:
      return Object.assign( {}, state, {
        user1: action.user1ScreenName,
        user2: action.user2ScreenName
      });
    default:
      return state
  };
};

export default screenNames;
