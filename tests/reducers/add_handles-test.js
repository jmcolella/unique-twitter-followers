import { expect } from 'chai';
import * as Constants from '../../app/constants/add_handles_constants';
import handles from '../../app/reducers/add_handles_reducers';
import { addHandle } from '../../app/actions/add_handles_actions';

describe ( 'Redux Reducers::Add Handle', () => {

  describe ( 'initial state', () => {
    const initialState = {
      handle1: '',
      handle2: ''
    };
    const undefinedAction = {
      type: undefined
    };

    it ( 'returns the initialState object', () => {
      expect( handles( undefined, undefinedAction ) ).to.deep.equal( initialState );
    })
  });

  describe ( 'state after addHanle action', () => {

    describe ( 'action with num = 1', () => {
      const action = addHandle( 'jcolella48', 1 );

      it ( 'returns object with handle1 equal to action.handle', () => {
        expect( handles( undefined, action ) ).to.deep.equal(
          {
            handle1: 'jcolella48',
            handle2: ''
          }
        );
      });
    });

    describe ( 'action with num = 2', () => {
      const action = addHandle( 'sarahjeangilly', 2 );

      it ( 'returns object with handle2 equal to action.handle', () => {
        expect( handles( undefined, action ) ).to.deep.equal(
          {
            handle1: '',
            handle2: 'sarahjeangilly'
          }
        );
      });
    });

  });

});
