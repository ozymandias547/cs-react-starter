module.exports = function(grunt) {
	grunt.registerTask('build-prod', [
		'clean:prod',
		'webpack:prod'
	]);
};
