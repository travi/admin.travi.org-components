import React from 'react';
import {storiesOf} from '@kadira/storybook';
import createPrimaryNav from '../src/theme/nav/primary-nav';

const PrimaryNav = createPrimaryNav(React);

storiesOf('Primary Nav', module)
    .add('empty nav', () => <PrimaryNav primaryNav={[]}/>)
    .add('populated nav', () => <PrimaryNav primaryNav={[
        { text: 'rides' },
        { text: 'users' }
    ]}/>);
