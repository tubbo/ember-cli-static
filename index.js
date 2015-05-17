/* jshint node: true */
'use strict';

var PageTree = require('./lib/page-tree'),
    funnel = require('broccoli-funnel'),
    mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-static',

  treeForPublic: function(tree) {
    this._requireBuildPackages();
    var pageTree = new PageTree(funnel('app', { srcDir: 'pages', destDir: 'pages' }));

    mergeTrees([ tree, pageTree ]);
  }
};
