'use strict';
let webpack = require('webpack');
let path = require('path');
let defaultSettings = require('./defaults');

let npmBase = path.join(__dirname, '../node_modules');
let bowerBase = path.join(__dirname, '../bower_components');
let additionalPaths = [
  path.join(npmBase, 'colors.css'),
  path.join(bowerBase, 'jquery'),
  path.join(bowerBase, 'semantic'),
];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: `.${defaultSettings.publicPath}`
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    },
    modulesDirectories: ["web_modules", "node_modules", "bower_components"]
  },
  plugins: [
      new webpack.ResolverPlugin(
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
      ),
      new webpack.ProvidePlugin({
        'jQuery': 'jquery',
      })
  ],
  module: {},
};
