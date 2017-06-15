import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import {Index} from '../../src/main';

suite('index', () => {
  test('that the proper content is displayed', () => {
    const wrapper = shallow(<Index />);

    assert.equal(wrapper.find('h2').text(), 'Reference API Client');
    assert.equal(wrapper.find('p').text(), 'Administration for Travi.org');
  });

  test('that the page title is set', () => {
    const wrapper = shallow(<Index />);

    assert.equal(wrapper.find('HelmetWrapper').prop('title'), 'Home');
  });
});
