import React from 'react';
import {storiesOf} from '@kadira/storybook';
import createIndex from '../src/index';

const Index = createIndex(React);

storiesOf('Index', module).add('default', () => <Index />);
