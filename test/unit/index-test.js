import React from 'react';
import cheerio from 'cheerio';
import reactDom from 'react-dom/server';
import {assert} from 'chai';
import skinDeep from 'skin-deep';

import { createIndex } from '../../src/main';

suite('index', () => {
    const Index = createIndex(React);

    test('that displayName is set', () => {
        assert.equal(Index.displayName, 'Index');
    });

    test('that the proper content is displayed', () => {
        const $ = cheerio.load(reactDom.renderToStaticMarkup(<Index />));

        assert.equal($('h2').text(), 'Reference API Client');
        assert.equal($('p').text(), 'Administration for Travi.org');
    });

    test('that the page title is set', () => {
        const tree = skinDeep.shallowRender(<Index />);

        assert.isObject(tree.subTree('HelmetWrapper', {title: 'Home'}));
    });
});
