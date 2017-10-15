import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import styles from './style-fakes';

configure({adapter: new Adapter()});

require.extensions['.scss'] = module => {
  module.exports = styles;    // eslint-disable-line no-param-reassign

  return module;
};

console.error = err => { throw new Error(err); };           // eslint-disable-line no-console
console.warn = warning => { throw new Error(warning); };    // eslint-disable-line no-console
