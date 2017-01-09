import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import List from '../../app/components/List';
import Friend from '../../app/components/Friend';

describe ( 'List component', () => {

  let list;

  beforeEach( () => {
    list = mount( <List handle='Test' compareList={ ['jcolella48', 'sarahjeangilly'] } /> );
  });

  it ( 'renders to the DOM', () => {
    expect( list ).to.exist;
  });

  it ( 'renders 1 h1 node with props.handle', () => {
    expect( list.find( 'h1' ).text() ).to.equal( list.props().handle )
  });

  it ( 'renders Friend child component for each item in props.compareList', () => {
    expect( list.find( Friend ) ).to.have.length( list.props().compareList.length );
  });

});
