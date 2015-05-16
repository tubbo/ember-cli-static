/* jshint node: true */
'use strict';


/**
 * Writes compiled JSON files to their designated paths.
 */

var CachingWriter = require('broccoli-caching-writer'),
    PageSource = require('./page-source'),
    rsvp = require('rsvp'),
    Promise = rsvp.promise,
    fs = require('fs'),
    writeFile = rsvp.denodeify(fs.writeFile);

module.exports = PageWriter;
PageWriter.prototype = CachingWriter;
PageWriter.prototype.constructor = PageWriter;

function PageWriter(inputFile, outputFile) {
  this.inputFile = inputFile;
  this.outputFile = outputFile;
};

PageWriter.prototype.updateCache = function(includePaths, destinationDir) {
  return new Promise(function (resolve, reject) {
    var page = new PageSource(this, destinationDir);

    resolve(writeFile(page.destination, page.toJSON()));
  }).bind(this)
};
