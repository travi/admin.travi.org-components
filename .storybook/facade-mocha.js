import {describe as describeReal, it as itReal} from 'storybook-addon-specifications';

module.exports = {
    describe: global.describe || describeReal,
    it: global.it || itReal
};
