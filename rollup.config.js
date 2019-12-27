/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import babel from 'rollup-plugin-babel';
import glob from 'glob';

export default {
  input: 'src/main.js',
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
      presets: [['@travi', {targets: {node: 10, browser: true}, react: true, modules: false}]],
      plugins: [['transform-react-remove-prop-types', {mode: 'wrap'}]]
    })
  ],
  output: [
    {file: 'lib/components.cjs.js', format: 'cjs', sourcemap: true},
    {file: 'lib/components.es.js', format: 'es', sourcemap: true}
  ]
};
