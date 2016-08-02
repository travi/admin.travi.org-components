import React from 'react';

import skinDeep from 'skin-deep';
import {assert} from 'chai';
import {string, simpleObject, listOf} from '@travi/any';

import {createMaybeList} from '../../../../src/main';
const MaybeList = createMaybeList(React);

suite('maybe-list component', () => {
    const resourceType = string();

    test('that displayName is set', () => {
        assert.equal(MaybeList.displayName, 'MaybeResourceList');
    });

    test('that message is displayed if the resource list is empty', () => {
        const
            tree = skinDeep.shallowRender(React.createElement(MaybeList, {
                resources: [],
                resourceType,
                loading: false
            })),
            emptyState = tree.dive(['ConditionalList']);

        assert.isObject(tree.subTree('HelmetWrapper', {title: resourceType}));
        assert.equal(emptyState.type, 'p');
        assert.equal(emptyState.text(), `No ${resourceType} are available`);
        assert.equal(emptyState.getRenderOutput().props.className, 'alert alert-info');
    });

    test('that the loading indicator is shown when data is still loading', () => {
        const tree = skinDeep.shallowRender(<MaybeList resources={[]} resourceType={resourceType} loading={true} />);

        assert.isObject(tree.subTree('PageLoading'));
        assert.isObject(tree.subTree('HelmetWrapper', {title: resourceType}));
        assert.isFalse(tree.subTree('ConditionalList'));
    });

    test('that list is rendered when not empty', () => {
        const
            resources = listOf(simpleObject),

            tree = skinDeep.shallowRender(React.createElement(MaybeList, {resources, resourceType, loading: false})),
            list = tree.dive(['ConditionalList']);

        assert.isObject(tree.subTree('HelmetWrapper', {title: resourceType}));
        assert.isObject(list.subTree('ResourceList', {resources}));
    });
});
