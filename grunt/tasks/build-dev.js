module.exports = function(grunt) {
	grunt.registerTask('build-dev', [
		'clean:dev',
		'webpack:dev'
	]);
};
