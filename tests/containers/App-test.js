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

  it ( 'renders a `h1` node', () => {
    expect( app.find( 'h1' ) ).to.exist;
  });

  it ( 'renders a `p` node', () => {
    expect( app.find( 'p' ) ).to.exist;
  });

});
