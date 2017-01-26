/* eslint filenames/match-regex: "off" */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
require('babel-register');

module.exports = grunt => {
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    jitGrunt: {
      staticMappings: {
        sasslint: 'grunt-sass-lint'
      }
    }
  });

  grunt.event.on('coverage', (lcov, done) => {
    require('coveralls').handleInput(lcov, err => {
      if (err) return done(err);

      return done();
    });
  });
};
