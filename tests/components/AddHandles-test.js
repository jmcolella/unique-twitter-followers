import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AddHandles from '../../app/components/AddHandles';
import Banner from '../../app/components/Banner';
import Header from '../../app/components/Header';
import Input from '../../app/containers/Input';
import Button from '../../app/components/Button';

describe ( 'AddHandles component', () => {

  let addHandles;

  beforeEach( () => {
    addHandles = shallow( <AddHandles /> );
  });

  it ( 'renders to the DOM', () => {
    expect( addHandles ).to.exist;
  });

  it ( 'renders 1 Banner child component', () => {
    expect( addHandles.find( Banner ) ).to.have.length( 1 );
  });

  it ( 'renders 1 Header child component', () => {
    expect( addHandles.find( Header ) ).to.have.length( 1 );
  });

  it ( 'renders 2 Input child components', () => {
    expect( addHandles.find( Input ) ).to.have.length( 2 );
  });

  it ( 'renders 1 Button child component', () => {
    expect( addHandles.find( Button ) ).to.have.length( 1 );
  });

});
