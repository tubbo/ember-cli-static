/* jshint node: true */
'use strict';

/**
 * Compiles JSON files for each page as well as an index of all pages.
 */

var mergeTrees = require('broccoli-merge-trees'),
    PageWriter = require('./page-writer'),
    path = require('path');

module.exports = PageCompiler;

function PageCompiler(options) {
  this.options = {
    outputPaths: 'app/pages'
  };
};

PageCompiler.prototype.treeForPublic = function(tree) {
  return this.outputPaths.reduce(function(trees, file) {
    var inputFile = path.join('.', inputPath, file),
        outputFile = options.outputPaths[inputFile];

    console.log(inputFile, outputFile);

    if (inputFile && outputFile) {
      var writer = new PageWriter(inputFile, outputFile);
      trees.push(writer);
    }

    return trees;
  }, []);

  mergeTrees(pageTrees);*/

  return tree;
};

