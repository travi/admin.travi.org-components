import React from 'react';
import reactDom from 'react-dom/server';
import {Helmet} from 'react-helmet';
import cheerio from 'cheerio';
import {shallow} from 'enzyme';
import microformats from 'microformat-node';
import {string, word, integer, url} from '@travi/any';
import {assert} from 'chai';
import PageLoading from '../../../../../src/atoms/loading-indicators/page';
import {Person} from '../../../../../src/main';

suite('person component test', () => {
  const person = {
    id: string(),
    displayName: word(),
    name: {
      first: word(),
      last: word()
    },
    avatar: {
      src: url(),
      size: integer()
    }
  };

  test('that the resource is displayed', () => {
    const $ = cheerio.load(reactDom.renderToStaticMarkup(<Person person={person} loading={false} />));
    const $avatar = $('div.resource img');

    assert.equal($('div.resource > h3').text(), person.displayName);
    assert.equal($avatar.attr('src'), person.avatar.src);
    assert.equal($avatar.attr('alt'), person.displayName);
    assert.equal($avatar.attr('height'), person.avatar.size);
    assert.equal($avatar.attr('width'), person.avatar.size);

    microformats.get({node: $}, (err, mformats) => {
      const hCard = mformats.items[0];
      assert.equal(hCard.properties.name, person.displayName);
      assert.equal(hCard.properties.photo, person.avatar.src);
      assert.equal(hCard.properties.nickname, person.id);
      assert.equal(hCard.properties['given-name'], person.name.first);
      assert.equal(hCard.properties['family-name'], person.name.last);
    });
  });

  test('that the page title is set', () => {
    const wrapper = shallow(<Person person={person} />);

    assert.equal(wrapper.find('HelmetWrapper').prop('title'), person.displayName);
  });

  test('that the loading indicator is shown when data is still loading', () => {
    const wrapper = shallow(<Person loading={true} />);

    assert.isTrue(
      wrapper.contains(<PageLoading />),
      'expected loading indicator to be displayed'
    );

    assert.isTrue(
      wrapper.contains(<Helmet title="Loading person..." />),
      'expected the title to be set to "Loading person..." using helmet'
    );
    assert.isFalse(
      wrapper.containsMatchingElement(<div className="resource" />),
      'expected the content to be hidden'
    );
  });
});
