var babel = require('rollup-plugin-babel');
var glob = require('glob');
var path = require('path');

module.exports = {
    es5: {
        options: {
            format: 'cjs',
            sourceMap: true,
            plugins: function () {
                return [
                    {
                        transform: ( code, id ) => {
                            if ( path.extname( id ) === '.scss' ) {
                                return { code: `export default styles = {}`, map: { mappings: '' } };
                            }
                        }
                    },
                    babel({
                        babelrc: false,
                        exclude: ['./node_modules/**'],
                        presets: ['react', 'es2015-rollup']
                    })
                ];
            }
        },
        files: {
            'lib/main.js': 'src/main.js'
        }
    },
    browser: {
        options: {
            format: 'cjs',
            sourceMap: true,
            external: glob.sync('**/*.scss', {cwd: 'src'}).map(function (file) {
                return require.resolve(__dirname + '/../src/' + file);
            }),
            plugins: function () {
                return [
                    babel({
                        babelrc: false,
                        exclude: './node_modules/**',
                        presets: ['react', 'es2015-rollup']
                    })
                ];
            }
        },
        files: {
            'lib/browser.js': 'src/main.js'
        }
    }
};