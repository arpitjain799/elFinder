const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: "source-map",
  output: {
    filename: 'elFinderSupportBrowserFS.js',
    path: path.resolve(__dirname, 'js/proxy'),
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.browser': 'true'
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/service-worker.js'),
      filename: 'service-worker.js',
    })
  ]
};
