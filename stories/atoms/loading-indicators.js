import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {storiesOf} from '@kadira/storybook';
import PageLoading from '../../src/atoms/loading-indicators/page';

storiesOf('Loading Indicators', module)
    .addDecorator((story) => (
        <MuiThemeProvider>
            {story()}
        </MuiThemeProvider>
    ))
    .add('page', () => <PageLoading />);
