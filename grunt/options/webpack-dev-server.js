/**
 * Bundle module dependencies.
 */

'use strict';

var webpack = require('webpack');
var webpackConfig = require('../../config/webpack.conf.js');
var paths = require('../../config/grunt.conf.js');

module.exports = {
	"webpack-dev-server": {
		options: {
			webpack: webpackConfig,
			port: 8883
		},
		start: {
			keepAlive: true,
			webpack: {
				devtool: 'sourcemap',
				debug: true,
				cache: true,
				output: {
					filename: '[name]/bundle.js',
					chunkFilename: '[name]/[id].common.js',
					publicPath: 'http://localhost:8090/'
				},
				plugins: []
			}
		}
	}
};
