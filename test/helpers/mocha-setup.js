import styles from './style-fakes';

require.extensions['.scss'] = module => {
  module.exports = styles;    // eslint-disable-line no-param-reassign

  return module;
};

console.error = err => { throw new Error(err); };           // eslint-disable-line no-console
console.warn = warning => { throw new Error(warning); };    // eslint-disable-line no-console
