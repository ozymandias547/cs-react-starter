module.exports = function(grunt) {
	grunt.registerTask('develop', [
		'clean:dev',
		'ejs:build-dev-server-includes',
        'webpack-dev-server'
    ]);
};
