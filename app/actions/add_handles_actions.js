import * as Constants from '../constants/add_handles_constants';

export function addHandle ( handle, num ) {
  return {
    type: Constants.ADD_HANDLE,
    num,
    handle
  }
};
