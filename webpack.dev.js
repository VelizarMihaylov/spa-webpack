'use strict';

var _spaWebpack = require('spa-webpack');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _htmlWebpackPlugin = require('html-webpack-plugin');

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _cleanWebpackPlugin = require('clean-webpack-plugin');

var _cleanWebpackPlugin2 = _interopRequireDefault(_cleanWebpackPlugin);

var _flowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

var _flowBabelWebpackPlugin2 = _interopRequireDefault(_flowBabelWebpackPlugin);

var _dotenvWebpack = require('dotenv-webpack');

var _dotenvWebpack2 = _interopRequireDefault(_dotenvWebpack);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The public path for dev build should always default to '/'
_spaWebpack.output.publicPath = '/';

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js'],
  module: {
    // This is added to avoid warnings generated by some of the dev tools
    // The prod Webpack config should compile fine without it
    exprContextCritical: false,
    rules: _spaWebpack.rules
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: _path2.default.resolve(__dirname, 'dist'),
    hot: true
  },
  plugins: [new _dotenvWebpack2.default({
    path: './.env'
  }), new _cleanWebpackPlugin2.default(['dist/public/bundle.js']), new _htmlWebpackPlugin2.default({
    template: _path2.default.resolve(__dirname, 'node_modules/spa-webpack/index.html')
  }), new _flowBabelWebpackPlugin2.default(), new _webpack2.default.LoaderOptionsPlugin({ options: {} })],
  output: _spaWebpack.output,
  resolve: {
    alias: _spaWebpack.alias,
    extensions: _spaWebpack.extentions
  },
  node: {
    dns: 'mock',
    net: 'mock'
  },
  externals: {
    winston: 'winston'
  }
};