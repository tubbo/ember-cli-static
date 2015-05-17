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
    fs = require('fs'),
    merge = require('merge');

module.exports = PageSource;
PageSource.prototype.constructor = PageSource;

function PageSource(writer, destinationDir) {
  this.source = fs.readFileSync(writer.inputFile);
  this.destination = path.join(destinationDir, writer.outputFile);
  this.id = writer.inputFile.split('/').last();
  this.attributes = merge(frontMatter(this.source), { id: id });

  mkdirp.sync(destinationDir);
};

PageSource.prototype.toJSON = function() {
  return this.attributes.toJSON();
};
