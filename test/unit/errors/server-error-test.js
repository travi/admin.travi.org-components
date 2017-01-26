import React from 'react';
import cheerio from 'cheerio';
import reactDom from 'react-dom/server';
import {assert} from 'chai';
import skinDeep from 'skin-deep';

import {ServerError} from '../../../src/main';

suite('server error', () => {
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
