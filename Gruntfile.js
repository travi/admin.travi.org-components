/*eslint filenames/filenames: "off" */

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                mochacov: 'grunt-mocha-cov',
                sasslint: 'grunt-sass-lint'
            }
        },
        config: {
            gitName: process.env.GIT_NAME,
            gitEmail: process.env.GIT_EMAIL,
            ghToken: process.env.GH_TOKEN
        }
    });
};
