/**
 * Bundle module dependencies.
 */

'use strict';

var webpack = require('webpack');
var gruntConfig = require('../../config/grunt.conf.js');

module.exports = {
	webpack: {
		options: require('../../config/webpack.conf.js'),
        'dev': {
            devtool: 'sourcemap',
            debug: true,
            cache: true
        },
        'prod': {
			plugins: [
				new webpack.optimize.OccurenceOrderPlugin(),
				new webpack.optimize.DedupePlugin(),
				new webpack.optimize.UglifyJsPlugin(),
				new webpack.optimize.AggressiveMergingPlugin()
			],
			stats: {
				colors: true,
				reasons: true
			},
			cache: false,
			debug: false
		}
	}
};
