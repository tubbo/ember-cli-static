/* jshint node: true */
'use strict';

/**
 * Parses YAML front matter and returns attributes as well as the body
 * of each Page as JSON.
 */

var path = require('path'),
    mkdirp = require('mkdirp'),
    frontMatter = require('front-matter'),
    marked = require('marked'),
    fs = require('fs');

module.exports = PageWriter;
PageWriter.prototype = CachingWriter;
PageWriter.prototype.constructor = PageWriter;

function PageSource(writer, destinationDir) {
  this.source = fs.readFileSync(writer.inputFile);
  this.destination = path.join(destinationDir, writer.outputFile);
  this.attributes = frontMatter(this.source);

  mkdirp.sync(destinationDir);
};

PageSource.prototype.toJSON = function() {
  return this.attributes.toJSON();
};
