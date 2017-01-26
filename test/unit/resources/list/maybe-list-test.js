import React from 'react';

import skinDeep from 'skin-deep';
import {assert} from 'chai';
import {string, simpleObject, listOf, integer} from '@travi/any';

import {MaybeList} from '../../../../src/main';

suite('maybe-list component', () => {
  const resourceType = string();

  test('that message is displayed if the resource list is empty', () => {
    const tree = skinDeep.shallowRender(React.createElement(MaybeList, {
      resources: [],
      resourceType,
      loading: false
    }));
    const emptyState = tree.dive(['ConditionalList']);

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
    const resources = listOf(() => ({...simpleObject(), id: integer(), displayName: string()}));

    const tree = skinDeep.shallowRender(React.createElement(MaybeList, {resources, resourceType, loading: false}));
    const list = tree.dive(['ConditionalList']);

    assert.isObject(tree.subTree('HelmetWrapper', {title: resourceType}));
    assert.isObject(list.subTree('ResourceList', {resources}));
  });
});
