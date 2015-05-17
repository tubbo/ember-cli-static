/* jshint node: true */
'use strict';

var fs = require('fs'),
    frontMatterCompiler = require('front-matter'),
    merge = require('merge'),
    marked = require('marked'),
    path = require('path'),
    parameterize = require('parameterize');

/**
 * Compile a page resource from Markdown and YAML Front Matter into an
 * attributes Object.
 *
 * @constructor
 */
function Compiler(resource, filename) {
  this.resource = resource;
  this.sourceFile = path.join(
    'app', this.resource.name, filename
  );
  this.destinationFile = path.join(
    'public', this.resource.name, filename.replace('.md', '.json')i
  );
};

/**
 * Compile all static resources.
 */
Compiler.compile = function(resources) {
  resources.forEach(Compiler._compileResource);
};

/**
 * Compile a single page resource.
 *
 * @private
 */
Compiler._compileResource = function(resource) {
  var pages = [];

  fs.readdir(path.join('app', resource.name), function(file) {
    var page = new Compiler(resource, path.basename(file));
    pages.push(page.attributes);
    page.write();
  });

  fs.writeFile('public/'+resource.name+'.json', pages.toJSON());
};

/**
 * Raw data from the file.
 *
 * @returns String
 */
Object.defineProperty(Compiler, 'data', {
  enumerable: true,
  configurable: false,

  get: function() {
    return fs.readFileSync(this.sourceFile);
  }
});

/**
 * Compile data into YAML front matter and the body.
 *
 * @returns Object
 */
Object.defineProperty(Compiler, 'frontMatter', {
  enumerable: true,
  configurable: false,

  get: function() {
    return frontMatter(this.data);
  }
});

/**
 * Compute the ID from the given recipe on the resource.
 *
 * @returns String
 */
Object.defineProperty(Compiler, 'pageID', {
  enumerable: true,
  configurable: false,

  this.resource.idRecipe.map(function(segment) {
    return parameterize(this.attributes[segment]);
  }, []).join('/');
});

/**
 * Merge attributes from front matter with the Markdown-compiled body
 * and the ID.
 *
 * @returns Object
 */
Object.defineProperty(Compiler, 'attributes', {
  enumerable: true,
  configurable: false,

  get: function() {
    merge(this.frontMatter.attributes, {
      id: this.pageID,
      body: marked(this.frontMatter.body)
    })
  }
});

/**
 * Write the JSON out to a file in public/${resource} and returns `true`
 * if the file was written.
 *
 * @returns Boolean
 */
Compiler.prototype.write = function() {
  fs.writeFile(this.destinationFile, this.attributes.toJSON());
});

module.exports = Compiler
