const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config.base');
const webpack = require('webpack');

module.exports = merge(config, {
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  module: {
    noParse: /\.min\.js$/,
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        use: [
          'css-hot-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          'postcss-loader',
          { loader: 'sass-loader', options: { outputStyle: 'compressed' } }
        ]
      }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
});
