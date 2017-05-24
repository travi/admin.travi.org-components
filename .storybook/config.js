import {configure, setAddon} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import '../src/theme/bootstrap-custom.scss';

setAddon(infoAddon);

function loadStories() {
  const req = require.context('../stories', true, /.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
