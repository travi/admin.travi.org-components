import React from 'react';
import cheerio from 'cheerio';
import reactDom from 'react-dom/server';
import {assert} from 'chai';
import skinDeep from 'skin-deep';

import createNotFound from '../../../src/errors/server-error';

suite('server error', () => {
    const ServerError = createNotFound(React);

    test('that displayName is set', () => {
        assert.equal(ServerError.displayName, 'ServerError');
    });

    test('that the proper content is displayed', () => {
        const $ = cheerio.load(reactDom.renderToStaticMarkup(<ServerError />));

        assert.equal($('h2').text(), '500');
        assert.equal($('p').text(), 'Server Error');
    });

    test('that the page title is set', () => {
        const tree = skinDeep.shallowRender(<ServerError />);

        assert.isObject(tree.subTree('HelmetWrapper', {title: 'Server Error'}));
    });
});
