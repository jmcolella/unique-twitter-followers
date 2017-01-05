import * as Constants from '../constants/add_handles_constants';

const initialState = {
  handle1: '',
  handle2: ''
}

const handles = ( state = initialState, action ) => {
  switch ( action.type ) {
    case Constants.ADD_HANDLE:
      if ( action.num === 1 ) {
        return Object.assign( {}, state, {
          handle1: action.handle
        });
      } else {
        return Object.assign( {}, state, {
          handle2: action.handle
        });
      }
    default:
      return state
  };
};

export default handles;
