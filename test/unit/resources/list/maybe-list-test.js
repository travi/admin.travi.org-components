import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import {string, simpleObject, listOf, integer} from '@travi/any';
import {MaybeList} from '../../../../src/main';

suite('maybe-list component', () => {
  const resourceType = string();

  test('that message is displayed if the resource list is empty', () => {
    const wrapper = shallow(<MaybeList resources={[]} resourceType={resourceType} loading={false} />);
    const emptyState = wrapper.find('ConditionalList');
    const message = emptyState.dive().find('p');

    assert.equal(wrapper.find('HelmetWrapper').prop('title'), resourceType);
    assert.equal(emptyState.dive().text(), `No ${resourceType} are available`);
    assert.isTrue(message.hasClass('alert'));
    assert.isTrue(message.hasClass('alert-info'));
  });

  test('that the loading indicator is shown when data is still loading', () => {
    const wrapper = shallow(<MaybeList resources={[]} resourceType={resourceType} loading={true} />);

    assert.isTrue(wrapper.find('PageLoading').exists());
    assert.equal(wrapper.find('HelmetWrapper').prop('title'), resourceType);
    assert.isFalse(wrapper.find('ConditionalList').exists());
  });

  test('that list is rendered when not empty', () => {
    const resources = listOf(() => ({...simpleObject(), id: integer(), displayName: string()}));

    const wrapper = shallow(<MaybeList resources={resources} resourceType={resourceType} loading={false} />);
    const list = wrapper.find('ConditionalList');

    assert.equal(wrapper.find('HelmetWrapper').prop('title'), resourceType);
    assert.equal(list.dive().find('ResourceList').prop('resources'), resources);
  });
});
