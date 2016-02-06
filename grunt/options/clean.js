/**
 * Preflight task.
 */

'use strict';

var paths = require('../../config/grunt.conf.js');

module.exports = {
	clean : {
        "dev": {
            src: [ paths.target ],
			options: {
				force: true		// Forcing in order to delete outside of the cwd()
			},
        },
        "prod": {
            src: [ paths.target],
			options: {
				force: true		// Forcing in order to delete outside of the cwd()
			}
        }
    }
};
