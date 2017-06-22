const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.template.ejs'),
      chunks: 'app',
      filename: 'index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: 'eslint-loader',
        include: path.resolve(__dirname, '../src')
      },
      // CSS modules
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
          { loader: 'sass-loader', options: { outputStyle: 'expanded' } }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    port: 3333,
    compress: false,
    inline: true,
    hot: true,
    host: '0.0.0.0',
    open: true,
    stats: true
  }
});
