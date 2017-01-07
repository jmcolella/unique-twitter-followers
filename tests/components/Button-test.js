import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from '../../app/components/Button';

describe ( 'Button component', () => {

  let button;

  beforeEach( () => {
    button = shallow( <Button link='/handles'>COMPARE</Button> );
  });

  it ( 'renders to the DOM', () => {
    expect( button ).to.exist;
  });

  it ( 'renders 1 button node with text props.children', () => {
    expect( button.find( 'button' ).text() ).to.equal( button.unrendered.props.children );
  });

});
