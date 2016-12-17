// NEED TO FIGURE OUT WHY CAN'T TEST FOR DOM NODES IN RETURN OF RENDER function

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { createStore } from 'redux'
import configureStore from '../../app/store/configure_store';
import FollowingLists from '../../app/containers/FollowingLists';

describe ( 'FollowingLists containers', () => {

  let followingLists;

  beforeEach( () => {
    const store = configureStore();
    followingLists = shallow( <FollowingLists />, {
      context: {
        store: store
      },
      childContextTypes: {
        store: React.PropTypes.object
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
