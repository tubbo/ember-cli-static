/* jshint node: true */
'use strict';

/**
 * Compiles JSON files for each page as well as an index of all pages.
 */

var mergeTrees = require('broccoli-merge-trees'),
    PageWriter = require('./page-writer');

module.exports = PageCompiler;

function PageCompiler(name) {
  this.name = name;
};

PageCompiler.prototype.toTree = function(tree, inputPath, outputPath, options) {
  var pageTrees = Object.keys(options.outputPaths).reduce(function(trees, file) {
    var inputFile = path.join('.', inputPath, file),
        outputFile = options.outputPaths[inputFile];

    if (!!inputFile.match(/pages/) && outputFile) {
      var writer = new PageWriter(inputFile, outputFile);
      trees.push(new PageWriter(inputFile, outputFile));
    }

    return trees;
  }, []));

  mergeTrees(pageTrees);
};

