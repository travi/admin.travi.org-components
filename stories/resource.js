import React from 'react';
import {storiesOf} from '@kadira/storybook';
import createResource from '../src/resources/individual/resource';
import createPerson from '../src/resources/individual/persons/person';

const
    Resource = createResource(React),
    Person = createPerson(React),
    person = {
        id: 1,
        name: {
            first: 'Matt',
            last: 'Travi'
        },
        displayName: 'Matt Travi',
        avatar: {
            src: 'https://www.gravatar.com/avatar/f69785efc7d990da20f1ab49fc2a6648?size=320',
            size: 320
        },
        links: []
    };

storiesOf('Resource Details', module)
    .add('resource', () => <Resource resource={{displayName: 'resource'}}/>)
    .add('person', () => <Person person={person}/>);
