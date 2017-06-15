import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import {ServerError} from '../../../src/main';

suite('not found', () => {
  test('that the proper content is displayed', () => {
    const wrapper = shallow(<ServerError />);

    assert.equal(wrapper.find('h2').text(), '500');
    assert.equal(wrapper.find('p').text(), 'Server Error');
  });

  test('that the page title is set', () => {
    const wrapper = shallow(<ServerError />);

    assert.equal(wrapper.find('HelmetWrapper').prop('title'), 'Server Error');
  });
});
