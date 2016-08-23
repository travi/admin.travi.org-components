import React from 'react';

import skinDeep from 'skin-deep';
import {assert} from 'chai';
import {string, url} from '@travi/any';

import styles from '../../../helpers/style-fakes';
import {ResourceList} from '../../../../src/main';

function assertSimpleResourceRenders(listItem, resource) {
    assert.deepEqual(listItem.props.children, ['', resource.displayName]);
}

function assertLinkRendersWhenSelfLinkIsDefined(listItem, resource) {
    assert.isObject(listItem.subTree('Link', {
        to: resource.links.self.href,
        children: resource.displayName,
        onlyActiveOnIndex: false,
        style: {}
    }));
}

function assertThumbnailRendersWhenDefined(listItem, resource) {
    assert.isObject(listItem.subTree('img', {
        src: resource.thumbnail.src,
        className: styles.thumbnail
    }));
}

suite('resource list component', () => {
    const resources = [
        {
            id: string(),
            displayName: string(),
            links: {}
        },
        {
            id: string(),
            displayName: string(),
            links: {
                self: {
                    href: url()
                }
            }
        },
        {
            id: string(),
            displayName: string(),
            links: {},
            thumbnail: {
                src: url()
            }
        }
    ];

    test('that list renders', () => {
        const
            tree = skinDeep.shallowRender(React.createElement(ResourceList, {resources})),
            trees = tree.everySubTree('ListGroupItem');

        assertSimpleResourceRenders(trees[0], resources[0]);
        assertLinkRendersWhenSelfLinkIsDefined(trees[1], resources[1]);
        assertThumbnailRendersWhenDefined(trees[2], resources[2]);
    });
});
