import React from 'react';

import any from '@travi/any';
import {assert} from 'chai';
import skinDeep from 'skin-deep';

import {createWrap} from '../../../../src/main';

suite('wrapper component', () => {
    const Wrap = createWrap(React);

    test('that displayName is set', () => {
        assert.equal(Wrap.displayName, 'Wrap');
    });

    test('that the layout markup is correct', () => {
        const
            primaryNav = any.listOf(any.simpleObject),
            children = 'foo',

            tree = skinDeep.shallowRender(React.createElement(Wrap, {primaryNav}, children)),
            result = tree.getRenderOutput();

        assert.equal(result.type, 'div');
        assert.equal(result.props.className, 'container');

        assert.isObject(tree.subTree('HelmetWrapper', {titleTemplate: '%s | Travi.org Admin'}));
        assert.isObject(tree.subTree('PrimaryNav', {primaryNav}));
        assert.equal(tree.props.children[2], children);
    });
});
