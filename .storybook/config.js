import {configure, setAddon} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import '../src/theme/bootstrap-custom.scss';

setAddon(infoAddon);

function loadAtoms() {
  require('../stories/atoms/loading-indicators.js');
}

function loadStories() {
  loadAtoms();

  require('../stories/primary-nav');
  require('../stories/index');
  require('../stories/resource-list');
  require('../stories/resource');
  require('../stories/errors');
}

configure(loadStories, module);
