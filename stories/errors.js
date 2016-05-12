import React from 'react';
import {storiesOf} from '@kadira/storybook';
import createNotFound from '../src/errors/not-found';
import createServerError from '../src/errors/server-error';

const
    NotFound = createNotFound(React),
    ServerError = createServerError(React);

storiesOf('Errors', module)
    .add('not found', () => <NotFound />)
    .add('server error', () => <ServerError />);
