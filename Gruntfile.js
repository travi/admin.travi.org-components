/*eslint filenames/match-regex: "off" */
require('babel-register');

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                sasslint: 'grunt-sass-lint'
            }
        },
        config: {
            gitName: process.env.GIT_NAME,
            gitEmail: process.env.GIT_EMAIL,
            ghToken: process.env.GH_TOKEN
        }
    });

    grunt.event.on('coverage', (lcov, done) => {
        require('coveralls').handleInput(lcov, (err) => {
            if (err) {
                return done(err);
            }
            return done();
        });
    });
};
