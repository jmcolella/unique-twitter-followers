import { expect } from 'chai';
import * as Constants from '../../app/constants/following_constants';
import followingHelpers from '../../app/utils/following_helpers';

describe ( 'Redux Helpers::Following', () => {

  describe ( 'Fetching helper', () => {

    describe ( 'Fetching helper::REQUEST_FOLLOWING action type', () => {
      const requestAction = {
        type: Constants.REQUEST_FOLLOWING
      };
      const requestReturnObj = followingHelpers.fetching( undefined, requestAction )

      it ( 'returns state object with isFetching property', () => {
        expect( requestReturnObj ).to.have.property( 'isFetching' );
      });

      it ( 'returns with isFetching property as `true`', () => {
        expect( requestReturnObj['isFetching'] ).to.equal( true );
      })

      it ( 'returns state object with following property', () => {
        expect( requestReturnObj ).to.have.property( 'following' );
      });
    });

    describe ( 'Fetching helper::RECEIVE_FOLLOWING action type', () => {
      const receiveAction = {
        type: Constants.RECEIVE_FOLLOWING,
        followingList: ['sarahjeangilly']
      }
      const receiveReturnObj = followingHelpers.fetching( undefined, receiveAction );

      it ( 'returns state object with isFetching property', () => {
        expect( receiveReturnObj ).to.have.property( 'isFetching' );
      });

      it ( 'returns with isFetching property as `false`', () => {
        expect( receiveReturnObj['isFetching'] ).to.equal( false );
      });

      it ( 'returns state object with following property', () => {
        expect( receiveReturnObj ).to.have.property( 'following' );
      });

      it ( 'returns with following property equal to action.followingList', () => {
        expect( receiveReturnObj['following'] ).to.equal( receiveAction.followingList );
      });
    });

    describe ( 'Fetching helper::Undefined action type', () => {
      const undefinedAction = {
        type: undefined
      };
      const defaultState = {
        isFetching: false,
        following: []
      };
      const undefinedReturnObj = followingHelpers.fetching( undefined, undefinedAction );

      it ( 'returns with default state object', () => {
        expect( undefinedReturnObj ).to.deep.equal( defaultState );
      });
    });

  });

  describe ( 'Compare Helper', () => {
    let firstArr = ['kitsplit', 'sarahjeangilly'];
    let secondArr = ['kitsplit', 'kylemooney'];
    const compareFirstToSecond = followingHelpers.compare( firstArr, secondArr );
    const compareSecondToFirst = followingHelpers.compare( secondArr, firstArr );

    it ( 'returns array with unique values for firstArr compared to secondArr', () => {
      expect( compareFirstToSecond ).to.deep.equal( ['sarahjeangilly'] );
    });

    it ( 'returns array with unique values for secondArr compared to firstArr', () => {
      expect( compareSecondToFirst ).to.deep.equal( ['kylemooney'] );
    });
  });

  describe ( 'Error Helper', () => {
    const userObj = {
      isFetching: true,
      following: []
    };
    const action = {
      type: Constants.TWITTER_ERROR,
      user: 'jcolella48'
    };
    const errorObj = followingHelpers.error( userObj, action );

    it ( 'returns obj with isFetching property false', () => {
      expect( errorObj.isFetching ).to.equal( false );
    });

    it ( 'returns obj with error property true', () => {
      expect( errorObj.error ).to.equal( true );
    });
  });

});
