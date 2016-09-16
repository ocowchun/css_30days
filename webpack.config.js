var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    app: './src/javascripts/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'js')
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.woff$/,
      loader: 'url-loader?prefix=font/&limit=5000'
    }, ]
  }
};
