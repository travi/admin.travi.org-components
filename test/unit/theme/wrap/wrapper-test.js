import React from 'react';

import {listOf, simpleObject, string} from '@travi/any';
import {assert} from 'chai';
import skinDeep from 'skin-deep';

import {Wrap} from '../../../../src/main';

suite('wrapper component', () => {
  test('that the layout markup is correct', () => {
    const primaryNav = listOf(() => ({...simpleObject(), path: string(), text: string()}));
    const children = 'foo';

    const tree = skinDeep.shallowRender(React.createElement(Wrap, {primaryNav}, children));
    const result = tree.getRenderOutput();

    assert.equal(result.type, 'div');
    assert.equal(result.props.className, 'container');

    assert.isObject(tree.subTree('HelmetWrapper', {titleTemplate: '%s | Travi.org Admin'}));
    assert.isObject(tree.subTree('PrimaryNav', {primaryNav}));
    assert.equal(tree.props.children[2], children);
  });
});
