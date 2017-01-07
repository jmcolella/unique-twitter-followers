import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { createStore } from 'redux'
import configureStore from '../../app/store/configure_store';
import Input from '../../app/containers/Input';

describe ( 'Input container', () => {

  let input,
        store;

  beforeEach( () => {
    store = configureStore();
    input = mount( <Input id={ 1 } placeholder='handle 1' />, {
      context: {
        store
      }
    });
  });

  it ( 'renders to the DOM', () => {
    expect( input ).to.exist;
  });

  it ( 'renders 1 input node', () => {
    expect( input.find( 'input' ) ).to.have.length( 1 );
  });

  it ( 'onChange dispatchs input.value to store and sets that value for the appropriate handle', () => {
    const changeVal = 'h';
    const i = input.find( 'input' );
    i.node.value = changeVal;
    i.simulate( 'change' );
    expect( store.getState().handles.handle1 ).to.equal( changeVal);
  });

});
