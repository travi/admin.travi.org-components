import React from 'react';
import {storiesOf} from '@kadira/storybook';
import NotFound from '../src/errors/not-found';
import ServerError from '../src/errors/server-error';

storiesOf('Errors', module)
    .add('not found', () => <NotFound />)
    .add('server error', () => <ServerError />);
