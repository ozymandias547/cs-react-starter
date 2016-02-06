var path = require('path');
var paths = require('../../config/grunt.conf.js');

module.exports = {
	ejs: {
		"build-dev-server-includes": {
			options: {
				devServerUrl: "http://localhost:8883"
			},
			cwd: path.normalize(process.cwd() + '/grunt/templates'),
			src: ['**/*.ejs'],
			dest: path.normalize(paths.target),
			expand: true,
			ext: '.html'
		}
	}
};