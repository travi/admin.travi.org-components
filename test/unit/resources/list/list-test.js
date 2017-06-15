import React from 'react';
import {Link} from 'react-router';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import {string, url, integer} from '@travi/any';
import styles from '../../../helpers/style-fakes';
import {ResourceList} from '../../../../src/main';

function assertSimpleResourceRenders(listItem, resource) {
  assert.equal(listItem.children().text(), resource.displayName);
}

function assertLinkRendersWhenSelfLinkIsDefined(listItem, resource) {
  assert.isTrue(listItem.contains(<Link to={resource.links.self.href}>{resource.displayName}</Link>));
}

function assertThumbnailRendersWhenDefined(listItem, resource) {
  assert.isTrue(listItem.contains(
    <img src={resource.thumbnail.src} className={styles.thumbnail} alt={`${resource.displayName}'s avatar`} />
  ));
}

suite('resource list component', () => {
  const resources = [
    {
      id: integer(),
      displayName: string(),
      links: {}
    },
    {
      id: integer(),
      displayName: string(),
      links: {
        self: {
          href: url()
        }
      }
    },
    {
      id: integer(),
      displayName: string(),
      links: {},
      thumbnail: {
        src: url()
      }
    }
  ];

  test('that list renders', () => {
    const wrapper = shallow(<ResourceList resources={resources} />);
    const items = wrapper.find('ListGroupItem');

    assertSimpleResourceRenders(items.at(0), resources[0]);
    assertLinkRendersWhenSelfLinkIsDefined(items.at(1), resources[1]);
    assertThumbnailRendersWhenDefined(items.at(2), resources[2]);
  });
});
