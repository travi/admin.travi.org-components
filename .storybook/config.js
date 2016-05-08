import { configure } from '@kadira/storybook';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

function loadStories() {
    require('../stories/primary-nav');
}

configure(loadStories, module);
