import {JSDOM} from 'jsdom';
import {storiesOf, specs} from './storybook-stub';
import * as storybookFacade from './facade-storybook';

storybookFacade.storiesOf = storiesOf;
storybookFacade.specs = specs;

function setupDom() {
  const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
  const { window } = jsdom;

  function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .map(prop => Object.getOwnPropertyDescriptor(src, prop));
    Object.defineProperties(target, props);
  }

  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js'
  };
  copyProps(window, global);
}

setupDom();

require.extensions['.scss'] = (module) => {
  module.exports = {};

  return module;
};
