import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Error from '../../app/components/Error';

describe ( 'Error component', () => {

  it ( 'renders to the DOM', () => {
    expect( shallow( <Error /> ) ).to.exist;
  });

});
