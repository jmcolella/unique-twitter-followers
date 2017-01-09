import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from '../../app/components/Header';

describe ( 'Header component', () => {

  let header;

  beforeEach( () => {
    header = shallow( <Header title='Test Title' subTitle='Test Subtitle' /> );
  });

  it ( 'renders to the DOM', () => {
    expect( header ).to.exist;
  });

  describe ( 'props', () => {
    it ( 'renders 1 h1 node with props.title', () => {
      expect( header.find( 'h1' ).text() ).to.equal( header.unrendered.props.title );
    });

    it ( 'renders 1 p node with props.subTitle', () => {
      expect( header.find( 'p' ).text() ).to.equal( header.unrendered.props.subTitle );
    });
  });

});
