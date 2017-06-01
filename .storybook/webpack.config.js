module.exports = {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /bootstrap-custom\.scss$/,
        loaders: [
          'style-loader',
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'sass-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.scss$/,
        exclude: /bootstrap-custom\.scss$/,
        loaders: [
          'style-loader',
          {loader: 'css-loader', options: {modules: true, sourceMap: true}},
          {loader: 'sass-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=d+\.d+\.d+)?$/,
        loader: 'url-loader'
      }
    ]
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
  }
};
