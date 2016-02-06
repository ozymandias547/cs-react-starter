'use strict';

var	webpack = require('webpack');
var	gruntConfig = require('./grunt.conf.js');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var	HtmlWebpackPlugin = require('html-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;

module.exports = {
    context: gruntConfig.srcPath,
    entry: {
		ourAppName: gruntConfig.srcPath + "/entry.jsx"
	},
	output: {
		path: gruntConfig.target,
        filename: '[name]/[name][hash:8].bundle.js',
        chunkFilename: '[name]/[id].[hash:8].common.js'
	},
    devtool: 'source-map',
    resolveLoader: {
        modulesDirectories: [
            path.join(__dirname, "..", "node_modules")
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
    },
	module: {
		loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass?includePaths[]=" + bourbon)
            },
			{
				test: /\.css/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets:['react']
                }
            }
		]
	},
    plugins: [
        new ExtractTextPlugin("[name]/bundle.css")
    ]
};

