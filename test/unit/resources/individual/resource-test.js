import React from 'react';
import reactDom from 'react-dom/server';

import cheerio from 'cheerio';
import any from '@travi/any';
import {assert} from 'chai';
import skinDeep from 'skin-deep';

import createResource from '../../../../src/resources/individual/resource';
const Resource = createResource(React);

suite('resource component test', () => {
    const resource = {id: any.string(), displayName: any.string()};

    test('that displayName is set', () => {
        assert.equal(Resource.displayName, 'Resource');
    });

    test('that the resource is displayed', () => {
        const $ = cheerio.load(reactDom.renderToStaticMarkup(
            <Resource resource={resource} />
        ));

        assert.equal($('h3').text(), resource.displayName);
    });

    test('that the page title is set', () => {
        const tree = skinDeep.shallowRender(<Resource resource={resource} />);

        assert.isObject(tree.subTree('HelmetWrapper', {title: resource.displayName}));
    });
});
