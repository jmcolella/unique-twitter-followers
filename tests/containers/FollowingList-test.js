import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { createStore } from 'redux'
import { twitterFollowersApp } from '../../app/reducers/combine_reducers';
import FollowingLists from '../../app/containers/FollowingLists';

describe ( 'FollowingLists containers', () => {

  let followingLists;

  beforeEach( () => {
    followingLists = shallow( <FollowingLists />, {
      context: {
        store: createStore( twitterFollowersApp )
      }
    });
  });

  it ( 'renders to the DOM', () => {
    expect( followingLists ).to.exist;
  });

  it ( 'renders a node with class `.user1`', () => {
    expect( followingLists.find( '.user1' ) ).to.have.length( 1 );
  });

  it ( 'renders a node with class `.user2`', () => {
    expect( followingLists.find( '.user2' ) ).to.have.length( 1 );
  });

});
