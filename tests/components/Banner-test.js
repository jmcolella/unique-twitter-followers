import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Banner from '../../app/components/Banner';

describe ( 'Banner component', () => {

  it ( 'renders to the DOM', () => {
    expect( shallow( <Banner /> ) ).to.exist;
  });

});
