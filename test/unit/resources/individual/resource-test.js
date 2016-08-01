import React from 'react';
import Helmet from 'react-helmet';

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
        const
            wrapper = shallow(<Resource resource={resource} />),
            heading = wrapper.find('h3');

        assert.equal(heading.text(), `<HelmetWrapper />${resource.displayName}`);
        assert.isTrue(
            heading.contains(<Helmet title={resource.displayName} />),
            `expected the title to be set to '${resource.displayName}' using helmet`
        );
    });
});
