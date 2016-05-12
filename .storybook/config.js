import { configure } from '@kadira/storybook';

import '../src/theme/theme.scss';

function loadStories() {
    require('../stories/primary-nav');
    require('../stories/errors');
}

configure(loadStories, module);
