const path = require('path');
const webpack = require('webpack');

const TARGET = process.env.TARGET || 'app';
const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    'BASE_URL': JSON.stringify(process.env.BASE_URL || '/help_requests'),
    'TARGET': JSON.stringify(TARGET)
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
};

let entries = ['react-hot-loader/patch', 'src/entry'];

//adding 'babel-polyfill' for not react apps
if (TARGET !== 'app') {
  entries.concat('babel-polyfill');
}

module.exports = {
  entry: {
    app: entries
  },
  output: {
    filename: 'help-modal.js',
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
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, '../src'),
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          { loader: 'sass-loader', options: { outputStyle: 'compressed' } }
        ]
      },
    ]
  }
};
