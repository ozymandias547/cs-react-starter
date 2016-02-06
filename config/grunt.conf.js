/**
 * Grunt path configuration.
 */

'use strict';
var concat = require('path').normalize;

module.exports.assets = concat(process.cwd() + "/src/static");
module.exports.target = concat(process.cwd() + "/public/dist");
module.exports.srcPath = concat(process.cwd() + "/src");