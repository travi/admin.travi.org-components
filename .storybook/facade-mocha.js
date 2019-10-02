const specifications = require('storybook-addon-specifications');

const {describe: describeReal, it: itReal} = specifications;

module.exports = {
  describe: global.describe || describeReal,
  it: global.it || itReal
};
