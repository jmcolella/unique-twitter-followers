import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../app/containers/App';

describe ( 'App container', () => {

  let app;

  beforeEach( () => {
    app = shallow( <App /> );
  });

  it ( 'renders to the DOM', () => {
    expect( app ).to.exist;
  });

  it ( 'renders 2 input nodes', () => {
    expect( app.find( 'input' ) ).to.have.length( 2 );
  });

  it ( 'renders 1 button node', () => {
    expect( app.find( 'button' ) ).to.have.length( 1 );
  });

});
