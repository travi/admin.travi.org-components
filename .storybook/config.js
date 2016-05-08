import { configure } from '@kadira/storybook';

import '../src/theme/theme.scss';

function loadStories() {
    require('../stories/primary-nav');
}

configure(loadStories, module);
