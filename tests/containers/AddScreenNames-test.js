import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AddScreenNames from '../../app/containers/AddScreenNames';

describe ( 'AddScreenNames container', () => {

  let addScreenNames;

  beforeEach( () => {
    addScreenNames = shallow( <AddScreenNames /> );
  });

  it ( 'renders to the DOM', () => {
    expect( addScreenNames ).to.exist;
  });

  it ( 'renders 2 input nodes', () => {
    expect( addScreenNames.find( 'input' ) ).to.have.length( 2 );
  });

  it ( 'renders 1 button node', () => {
    expect( addScreenNames.find( 'button' ) ).to.have.length( 1 );
  });

});
