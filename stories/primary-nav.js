import React from 'react';
import {storiesOf} from '../.storybook/facade-storybook';
import PrimaryNav from '../src/theme/nav/primary-nav';

storiesOf('Primary Nav', module)
  .add('empty nav', () => <PrimaryNav primaryNav={[]} />)
  .add('populated nav', () => <PrimaryNav
    primaryNav={[
      {text: 'rides', path: '/foo'},
      {text: 'users', path: '/bar'}
    ]}
  />);
