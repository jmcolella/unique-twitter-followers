import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Index from '../../app/components/Index';
import Button from '../../app/components/Button';

describe ( 'Index component', () => {

  let index;

  beforeEach( () => {
    index = shallow( <Index /> );
  });

  it ( 'renders to the DOM', () => {
    expect( index ).to.exist;
  });

  it ( 'renders 1 Button child component', () => {
    expect( index.find( Button ) ).to.have.length( 1 );
  });

});
