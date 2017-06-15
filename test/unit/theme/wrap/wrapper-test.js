import React from 'react';
import {listOf, simpleObject, string} from '@travi/any';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import {Wrap} from '../../../../src/main';

suite('wrapper component', () => {
  test('that the layout markup is correct', () => {
    const primaryNav = listOf(() => ({...simpleObject(), path: string(), text: string()}));
    const children = 'foo';

    const wrapper = shallow(<Wrap primaryNav={primaryNav}>{children}</Wrap>);
    const container = wrapper.find('div');

    assert.isTrue(container.hasClass('container'));

    assert.equal(wrapper.find('HelmetWrapper').prop('titleTemplate'), '%s | Travi.org Admin');
    assert.equal(wrapper.find('PrimaryNav').prop('primaryNav'), primaryNav);
    assert.equal(wrapper.childAt(2).text(), children);
  });
});
