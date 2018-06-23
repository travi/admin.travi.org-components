import {string, url, listOf} from '@travi/any';

import React from 'react';
import dom from 'react-dom/server';
import cheerio from 'cheerio';
import {assert} from 'chai';

import HistoryWrapper from '../../helpers/history-wrapper';
import {PrimaryNav} from '../../../src/main';

suite('primary navigation', () => {
  test('that the resource types are listed as links', () => {
    const primaryNav = listOf(() => ({
      text: string(),
      path: url()
    }));

    const $ = cheerio.load(dom.renderToStaticMarkup((
      <HistoryWrapper><PrimaryNav primaryNav={primaryNav} /></HistoryWrapper>
    )));
    const $items = $('li');

    assert.equal($('nav').length, 1);
    assert.equal($items.length, primaryNav.length);
    $items.each((index, item) => {
      const $item = $(item);
      const type = primaryNav[index];
      const $link = $item.find('> a');

      assert.equal($link.text(), type.text);
      assert.equal($link.attr('href'), type.path);
    });
  });
});
