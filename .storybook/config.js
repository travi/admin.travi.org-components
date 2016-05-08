import { configure } from '@kadira/storybook';

function loadStories() {
    require('../stories/primary-nav');
}

configure(loadStories, module);
