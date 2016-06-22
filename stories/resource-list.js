import React from 'react';
import {storiesOf} from '@kadira/storybook';
import createResourceList from '../src/resources/list/maybe-list';

const ResourceList = createResourceList(React);

storiesOf('Resource List', module)
    .addWithInfo(
        'empty list',
        'this is the empty state',
        () => <ResourceList resourceType="foo" resources={[]}/>
    )
    .addWithInfo(
        'rides list',
        'list of rides',
        () => (
            <ResourceList resourceType="rides" resources={[
                { id: 1, displayName: 'corvette', links: [] },
                { id: 2, displayName: 'truck', links: [] },
                { id: 3, displayName: 'camaro', links: [] }
            ]}/>
        )
    )
    .addWithInfo(
        'users list',
        'list of users',
        () => (
            <ResourceList resourceType="users" resources={[
                {
                    id: 1,
                    displayName: 'Matt Travi',
                    thumbnail: {src: 'https://www.gravatar.com/avatar/f69785efc7d990da20f1ab49fc2a6648?size=32'},
                    links: []
                }
            ]}/>
        )
    );
