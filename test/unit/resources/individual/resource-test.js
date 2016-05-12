import React from 'react';
import reactDom from 'react-dom/server';

import cheerio from 'cheerio';
import any from '@travi/any';
import {assert} from 'chai';

import createResource from '../../../../src/resources/individual/resource';
const Resource = createResource(React);

suite('resource component test', () => {
    test('that displayName is set', () => {
        assert.equal(Resource.displayName, 'Resource');
    });

    test('that the resource is displayed', () => {
        const data = {resource: {id: any.string(), displayName: any.string()}},

            $ = cheerio.load(reactDom.renderToStaticMarkup(
                <Resource {...data} />
            ));

        assert.equal($('h3').text(), data.resource.displayName);
    });
});
