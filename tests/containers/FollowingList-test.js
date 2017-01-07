// NEED TO FINISH THESE TESTS AFTER UPDATING FUNCTIONALITY WITH LOCAL STORAGE
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { createStore } from 'redux'
import configureStore from '../../app/store/configure_store';
import FollowingLists from '../../app/containers/FollowingLists';

describe ( 'FollowingLists containers', () => {

  let followingLists,
      store;

  beforeEach( () => {
    store = configureStore();
    followingLists = mount( <FollowingLists />, {
      context: {
        store
      }
    });
  });

  it ( 'renders to the DOM', () => {
    expect( followingLists ).to.exist;
  });

  // it ( 'renders 2 `h1` nodes', () => {
  //   debugger;
  //   expect( followingLists.find( 'h1' ) ).to.have.length( 2 );
  // });

});
