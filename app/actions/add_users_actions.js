import * as Constants from '../constants/add_users_constants';

export function addUsers ( user1, user2 ) {
  return {
    type: Constants.ADD_SCREEN_NAMES,
    user1ScreenName: user1,
    user2ScreenName: user2
  }
};
