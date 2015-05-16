/* jshint node: true */
'use strict';

/**
 * Compiles JSON files for each page as well as an index of all pages.
 */

var mergeTrees = require('broccoli-merge-trees'),
    PageWriter = require('./page-writer');

module.exports = PageCompiler;

function PageCompiler(name, options) {
  this.name = name;
};

PageCompiler.prototype.toTree = function(tree, inputPath, outputPath, options) {
  var pageTrees = Object.keys(this.outputPaths).reduce(function(trees, file) {
    var inputFile = path.join('.', inputPath, file),
        outputFile = options.outputPaths[inputFile],
        resources = (options.resources) ? options.resources.join('|') : 'pages';

    if (!!inputFile.match(new RegExp(resources)) && outputFile) {
      var writer = new PageWriter(inputFile, outputFile);
      trees.push(writer);
    }

    return trees;
  }, []));

  mergeTrees(pageTrees);
};

