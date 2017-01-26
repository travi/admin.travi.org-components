import styles from './style-fakes';

require.extensions['.scss'] = module => {
  module.exports = styles;    // eslint-disable-line no-param-reassign

  return module;
};

console.error = warning => { throw new Error(warning); };   // eslint-disable-line no-console
