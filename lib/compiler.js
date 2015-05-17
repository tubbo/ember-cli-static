/* jshint node: true */
'use strict';

var fs = require('fs'),
    frontMatterCompiler = require('front-matter'),
    merge = require('merge'),
    marked = require('marked'),
    path = require('path');

/**
 * Compile a page resource.
 */
function Compiler(resource, filename) {
  this.sourceFile = path.join('app', resource, filename);
  this.destinationFile = path.join('public', resource, filename.replace('.md', '.json'));
  this.data = fs.readFileSync(this.sourceFile);
  this.frontMatter = frontMatterCompiler(this.data);
  this.attributes = merge(this.frontMatter.attributes, {
    body: marked(this.frontMatter.body),
    id: this.frontMatter.title
  })
};


/**
 * Write the JSON out to a file in public/${resource}
 */
Compiler.prototype.write = function() {
  fs.writeFile(this.destinationFile, this.attributes.toJSON());
});

module.exports = Compiler
