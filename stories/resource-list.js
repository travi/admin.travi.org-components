import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {storiesOf} from '@kadira/storybook';
import ResourceList from '../src/resources/list/maybe-list';

storiesOf('Resource List', module)
    .addDecorator((story) => (
        <MuiThemeProvider>
            {story()}
        </MuiThemeProvider>
    ))
    .addWithInfo(
        'empty list',
        'this is the empty state',
        () => <ResourceList resourceType="foo" resources={[]} loading={false} />
    )
    .addWithInfo(
        'loading',
        'this is the loading state',
        () => <ResourceList resourceType="foo" resources={[]} loading={true} />
    )
    .addWithInfo(
        'rides list',
        'list of rides',
        () => (
            <ResourceList resourceType="rides" loading={false} resources={[
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
            <ResourceList resourceType="users" loading={false} resources={[
                {
                    id: 1,
                    displayName: 'Matt Travi',
                    thumbnail: {src: 'https://www.gravatar.com/avatar/f69785efc7d990da20f1ab49fc2a6648?size=32'},
                    links: []
                }
            ]}/>
        )
    );
