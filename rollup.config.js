/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import babel from 'rollup-plugin-babel';
import path from 'path';

export default {
  entry: 'src/main.js',
  external: [
    'react',
    'react-helmet',
    'react-router',
    'react-bootstrap',
    'react-router-bootstrap',
    'material-ui/CircularProgress'
  ],
  plugins: [
    {
      transform: (code, id) => {
        if ('.scss' === path.extname(id)) {
          return {code: 'const styles = {}; export default styles;', map: {mappings: ''}};
        }
        return null;
      }
    },
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
