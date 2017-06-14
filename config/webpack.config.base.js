const path = require('path');
const webpack = require('webpack');

const baseEntries = ['react-hot-loader/patch', 'babel-polyfill'];

module.exports = {
  entry: {
    app: ['react-hot-loader/patch', 'babel-polyfill', 'src/entry']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      src: path.join(__dirname, '../src'),
      app: path.join(__dirname, '../src/app'),
      utils: path.join(__dirname, '../src/utils')
    },
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      }
    ]
  }
};
