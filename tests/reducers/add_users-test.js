import { expect } from 'chai';
import * as Constants from '../../app/constants/add_users_constants';
import screenNames from '../../app/reducers/add_users_reducers';
import { addUsers } from '../../app/actions/add_users_actions';

describe ( 'Redux Reducers::Add Users', () => {

  describe ( 'initial state', () => {
    const initialState = {
      users: []
    };
    const undefinedAction = {
      type: undefined
    };

    it ( 'returns the initialState object', () => {
      expect( screenNames( undefined, undefinedAction ) ).to.deep.equal( initialState );
    })
  });

  describe ( 'state after addUsers action', () => {
    const action = addUsers( 'jcolella48', 'sarahjeangilly' );

    it ( 'returns object with two users in users array', () => {
      expect( screenNames( undefined, action ) ).to.deep.equal(
        {
          users: [ 'jcolella48', 'sarahjeangilly' ]
        }
      );
    });
  });

});
