/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import babel from 'rollup-plugin-babel';
import glob from 'glob';

export default {
  input: 'src/main.js',
  sourcemap: true,
  external: [
    ...glob.sync('**/*.scss', {cwd: 'src'}).map(file => require.resolve(`${__dirname}/src/${file}`)),
    'react',
    'react-helmet',
    'react-router',
    'react-bootstrap',
    'react-router-bootstrap',
    'prop-types',
    'material-ui/CircularProgress'
  ],
  plugins: [
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: ['react', 'es2015-rollup'],
      plugins: [['transform-react-remove-prop-types', {mode: 'wrap'}]]
    })
  ],
  output: [
    {file: 'lib/components.cjs.js', format: 'cjs'},
    {file: 'lib/components.es.js', format: 'es'}
  ]
};
