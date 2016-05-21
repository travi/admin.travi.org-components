import styles from './style-fakes';

require.extensions['.scss'] = (module) => {
    module.exports = styles;

    return module;
};
