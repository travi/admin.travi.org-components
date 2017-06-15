import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import {NotFound} from '../../../src/main';

suite('not found', () => {
  test('that the proper content is displayed', () => {
    const wrapper = shallow(<NotFound />);

    assert.equal(wrapper.find('h2').text(), '404');
    assert.equal(wrapper.find('p').text(), 'Page Not Found');
  });

  test('that the page title is set', () => {
    const wrapper = shallow(<NotFound />);

    assert.equal(wrapper.find('HelmetWrapper').prop('title'), 'Page Not Found');
  });
});
