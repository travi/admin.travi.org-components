import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {storiesOf} from '@storybook/react';
import Resource from '../src/resources/individual/resource';
import Person from '../src/resources/individual/persons/person';

const person = {
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
  .addDecorator(story => (
    <MuiThemeProvider>
      {story()}
    </MuiThemeProvider>
  ))
  .add('generic resource', () => <Resource resource={{displayName: 'resource'}} loading={false} />)
  .add('generic resource loading', () => <Resource resource={{}} loading={true} />)
  .add('person', () => <Person person={person} loading={false} />)
  .add('person loading', () => <Person person={{}} loading={true} />);
