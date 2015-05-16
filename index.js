/* jshint node: true */
'use strict';

var PageCompiler = require('./lib/page-compiler');

module.exports = {
  name: 'ember-cli-static',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    target.registry.add('json', new PageCompiler(this.name));
  }
};
