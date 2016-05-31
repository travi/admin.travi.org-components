module.exports = {
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /bootstrap-custom\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            },
            {
                test: /\.scss$/,
                exclude: /bootstrap-custom\.scss$/,
                loaders: ['style', 'css?modules&sourceMap', 'sass?sourceMap']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=d+\.d+\.d+)?$/,
                loader: 'url'
            }
        ]
    }
};
