/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import babel from 'rollup-plugin-babel';
import glob from 'glob';

export default {
  entry: 'src/main.js',
  sourceMap: true,
  external: [
    ...glob.sync('**/*.scss', {cwd: 'src'}).map(file => require.resolve(`${__dirname}/src/${file}`)),
    'react',
    'react-helmet',
    'react-router',
    'react-bootstrap',
    'react-router-bootstrap',
    'material-ui/CircularProgress'
  ],
  plugins: [
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: ['react', 'es2015-rollup']
    })
  ],
  targets: [
    {dest: 'lib/components.cjs.js', format: 'cjs'},
    {dest: 'lib/components.es.js', format: 'es'}
  ]
};
