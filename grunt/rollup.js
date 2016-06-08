import babel from 'rollup-plugin-babel';
import glob from 'glob';
import path from 'path';

module.exports = {
    es5: {
        options: {
            format: 'cjs',
            sourceMap: true,
            plugins() {
                return [
                    {
                        transform: (code, id) => {
                            if ('.scss' === path.extname(id)) {
                                return {code: 'export default styles = {}', map: {mappings: ''}};
                            }
                            return null;
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
            external: glob.sync('**/*.scss', {cwd: 'src'}).map((file) => {
                return require.resolve(`${__dirname}/../src/${file}`);
            }),
            plugins() {
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
