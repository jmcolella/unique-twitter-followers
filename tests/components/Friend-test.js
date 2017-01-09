import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Friend from '../../app/components/Friend';

describe ( 'Friend component', () => {

  let friend;

  beforeEach( () => {
    friend = shallow( <Friend friend='sarahjeangilly' /> );
  });

  it ( 'renders to the DOM', () => {
    expect( friend ).to.exist;
  });

  describe ( 'anchor node', () => {
    it ( 'renders 1 a node', () => {
      expect( friend.find(  'a' ) ).to.have.length( 1 );
    });

    it ( 'renders a node with text props.friend', () => {
      expect( friend.find( 'a' ).text() ).to.equal( friend.unrendered.props.friend );
    });

    it ( 'renders a node with href to Twitter profile for props.friend', () => {
      expect( friend.find( 'a' ).node.props.href ).to.equal( `https://www.twitter.com/${friend.unrendered.props.friend}` )
    });
  });

});
