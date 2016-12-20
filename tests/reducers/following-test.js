import { expect } from 'chai';
import configureStore from '../../app/store/configure_store';
import * as Constants from '../../app/constants/following_constants';
import * as Actions from '../../app/actions/following_actions';
import { following } from '../../app/reducers/following_reducers';

describe ( 'Redux Reducers::Following', () => {

  describe ( 'initial state', () => {
    const initialState = {
      user1Compare: [],
      user2Compare: []
    };
    const undefinedAction = {
      type: undefined
    };

    it ( 'returns the initialState object', () => {
      expect( following( undefined, undefinedAction ) ).to.deep.equal( initialState );
    });
  });

  describe ( 'state after REQUEST_FOLLOWING action type', () => {
    const request = Actions.requestFollowing( 'jcolella48' );
    const requestReturnObj = {
      user1Compare: [],
      user2Compare: [],
      jcolella48: {
        isFetching: true,
        following: []
      }
    }

    it ( 'returns state object with user and its `isFetching` property as true', () => {
      expect( following( undefined, request ) ).to.deep.equal( requestReturnObj );
    });
  });

  describe ( 'state after RECEIVE_FOLLOWING action type', () => {
    const followingArray = ['kitsplit', 'kylemooney']
    const receiveAction = Actions.receiveFollowing( 'jcolella48', { array: followingArray } );
    const receiveReturnObj = {
      user1Compare: [],
      user2Compare: [],
      jcolella48: {
        isFetching: false,
        following: followingArray
      }
    };

    it ( 'returns state with user object containing isFetching property false and following property with array', () => {
      expect( following( undefined, receiveAction ) ).to.deep.equal( receiveReturnObj );
    });
  });

  describe ( 'state after async fetch action', () => {
    const users = ['jcolella48', 'sarahjeangilly'];
    const store = configureStore();
    store.dispatch( Actions.fetchFollowing( users ) )

    describe ( 'user1 object', () => {
      it ( 'returns user1 object with property name `jcolella48`', () => {
        expect( store.getState().following ).to.have.property( 'jcolella48' ).that.is.an( 'object' );
      });

      it ( 'returns user1 object with property isFetching', () => {
        expect( store.getState().following['jcolella48'] ).to.have.property( 'isFetching' ).that.is.a( 'boolean' );
      });

      describe ( 'user1 object::following array', () => {
        it ( 'returns user1 object with property following array', () => {
          expect( store.getState().following['jcolella48'] ).to.have.property( 'following' ).that.is.an( 'array' );
        });

        it ( 'following array contains friends from Twitter search; has length greater than 0', () => {
          expect( store.getState().following['jcolella48']['following'] ).to.have.length.above( 0 )
        });
      });

    });

    describe ( 'user2 object', () => {
      it ( 'returns user2 object with property name `sarahjeangilly`', () => {
        expect( store.getState().following ).to.have.property( 'sarahjeangilly' ).that.is.an( 'object' );
      });

      it ( 'returns user2 object with property isFetching', () => {
        expect( store.getState().following['sarahjeangilly'] ).to.have.property( 'isFetching' ).that.is.a( 'boolean' );
      });

      describe ( 'user2 object::following array', () => {
        it ( 'returns user2 object with property following array', () => {
          expect( store.getState().following['sarahjeangilly'] ).to.have.property( 'following' ).that.is.an( 'array' );
        });

        it ( 'following array contains friends from Twitter search; has length greater than 0', () => {
          expect( store.getState().following['sarahjeangilly']['following'] ).to.have.length.above( 0 )
        });
      });
    });
  });

  describe ( 'state after COMPARE_FOLLOWING action type', () => {
    const user1Array = ['kitsplit', 'kylemooney'];
    const user2Array = ['sarahjeangilly', 'kylemooney'];
    const compareAction = Actions.compareFollowing( user1Array, user2Array );
    const compareReturnObj = {
      user1Compare: ['kitsplit'],
      user2Compare: ['sarahjeangilly']
    };

    it ( 'returns state with compare arrays containing unique friends', () => {
      expect( following( undefined, compareAction ) ).to.deep.equal( compareReturnObj );
    });
  });

});
