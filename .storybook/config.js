import { configure } from '@kadira/storybook';

import '../src/theme/theme.scss';

function loadStories() {
    require('../stories/primary-nav');
    require('../stories/index');
    require('../stories/resource-list');
    require('../stories/resource');
    require('../stories/errors');
}

configure(loadStories, module);
