import React from 'react';
import {storiesOf} from '@kadira/storybook';
import PrimaryNav from '../src/theme/nav/primary-nav';

storiesOf('Primary Nav', module)
    .add('empty nav', () => <PrimaryNav primaryNav={[]}/>)
    .add('populated nav', () => <PrimaryNav primaryNav={[
        { text: 'rides' },
        { text: 'users' }
    ]}/>);
