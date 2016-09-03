import jsdom from 'jsdom';
import {storiesOf, specs} from './storybook-stub';
import * as storybookFacade from './facade-storybook';

storybookFacade.storiesOf = storiesOf;
storybookFacade.specs = specs;

function setupDom() {
    const
        baseMarkup = '<!DOCTYPE html>',
        window = jsdom.jsdom(baseMarkup).defaultView;

    global.window = window;
    global.document = window.document;
    global.navigator = window.navigator;
}

setupDom();

require.extensions['.scss'] = (module) => {
    module.exports = {};

    return module;
};
