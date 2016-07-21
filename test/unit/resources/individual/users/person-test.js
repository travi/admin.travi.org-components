import React from 'react';
import reactDom from 'react-dom/server';

import cheerio from 'cheerio';
import microformats from 'microformat-node';
import {string, word, integer, url} from '@travi/any';
import {assert} from 'chai';
import skinDeep from 'skin-deep';

import {createUser} from '../../../../../src/main';
const User = createUser(React);

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

    test('that displayName is set', () => {
        assert.equal(User.displayName, 'Person');
    });

    test('that the resource is displayed', () => {
        const data = {person},

            $ = cheerio.load(reactDom.renderToStaticMarkup(
                <User {...data} />
            )),

            $avatar = $('div.resource img');

        assert.equal($('div.resource > h3').text(), data.person.displayName);
        assert.equal($avatar.attr('src'), data.person.avatar.src);
        assert.equal($avatar.attr('alt'), data.person.displayName);
        assert.equal($avatar.attr('height'), data.person.avatar.size);
        assert.equal($avatar.attr('width'), data.person.avatar.size);

        microformats.get({node: $}, (err, mformats) => {
            const hCard = mformats.items[0];
            assert.equal(hCard.properties.name, data.person.displayName);
            assert.equal(hCard.properties.photo, data.person.avatar.src);
            assert.equal(hCard.properties.nickname, data.person.id);
            assert.equal(hCard.properties['given-name'], data.person.name.first);
            assert.equal(hCard.properties['family-name'], data.person.name.last);
        });
    });

    test('that the page title is set', () => {
        const tree = skinDeep.shallowRender(<User person={person} />);

        assert.isObject(tree.subTree('HelmetWrapper', {title: person.displayName}));
    });
});
