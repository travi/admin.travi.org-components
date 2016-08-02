import React from 'react';
import Helmet from 'react-helmet';
import PageLoading from '../../../../src/atoms/loading-indicators/page';

import {string} from '@travi/any';
import {assert} from 'chai';
import {shallow} from 'enzyme';

import {createResource} from '../../../../src/main';
const Resource = createResource(React);

suite('resource component test', () => {
    const resource = {id: string(), displayName: string()};

    test('that displayName is set', () => {
        assert.equal(Resource.displayName, 'Resource');
    });

    test('that the resource is displayed', () => {
        const wrapper = shallow(<Resource resource={resource} loading={false} />);

        assert.isTrue(wrapper.contains(<h3>{resource.displayName}</h3>), 'heading should be displayed');
        assert.isTrue(
            wrapper.contains(<Helmet title={resource.displayName} />),
            `expected the title to be set to '${resource.displayName}' using helmet`
        );
        assert.isFalse(
            wrapper.containsMatchingElement(<PageLoading />),
            'expected loading indicator to be hidden'
        );
    });

    test('that a loading indicator is displayed when data is still loading', () => {
        const wrapper = shallow(<Resource resource={resource} loading={true} />);

        assert.isTrue(
            wrapper.contains(<PageLoading />),
            'expected loading indicator to be displayed'
        );
        assert.isTrue(
            wrapper.contains(<Helmet title={resource.displayName} />),
            `expected the title to be set to '${resource.displayName}' using helmet`
        );
        assert.isFalse(wrapper.containsMatchingElement(<h3 />), 'heading should be hidden');
    });
});
