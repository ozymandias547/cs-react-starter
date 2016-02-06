/*jshint latedef: nofunc */

/**
 * General Grunt setup
 */

'use strict';

module.exports = function ( grunt ) {

    require( 'matchdep' ).filterAll( 'grunt-*' ).forEach( grunt.loadNpmTasks );
    require( 'load-grunt-tasks' )( grunt );

    var config = {};

    // Load options.
    grunt.util._.extend( config, (function () {
        var glob = require( 'glob' ),
            configuration = {},
            currentObject = {},
            key,
            path = './grunt/options/';

        // Loop through files in /options to recreate options object.
        glob.sync( '*', { cwd: path } ).forEach( function ( option ) {
            key = option.replace( /\.js$/, '' );
            currentObject = require( path + option )[ key ];

            // Pull all config to the top of the new object.
            if ( typeof option === 'object' && option.hasOwnProperty( 'config' ) ) {
                var objectClone = configuration;
                configuration[ key ] = currentObject;

                for ( var prop in objectClone ) {
                    configuration[ prop ] = objectClone[ prop ];
                }
            } else {
                configuration[ key ] = currentObject;
            }
        } );

        return configuration;
    })() );

    // Load tasks.
    grunt.loadTasks( './grunt/tasks/' );

    // Initialize Grunt configuration.
    grunt.initConfig( config );

};
