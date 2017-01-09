import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Loading from '../../app/components/Loading';

describe ( 'Loading component', () => {

  it ( 'renders to the DOM', () => {
    expect( shallow( <Loading /> ) ).to.exist;
  });

});
