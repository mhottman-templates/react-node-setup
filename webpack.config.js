'use strict';
// var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, './app/src/scripts');
var BUILD_DIR = path.resolve(__dirname, './api/public');

var config = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
  	loaders: [
  	  {
  		test: /\.jsx?$/,
  		loader: 'babel',
  		exclude: /node_modules/,
      query:
         {
            presets:['react', 'es2015']
         }
  	  }
  	]
  }
};


module.exports = config;
