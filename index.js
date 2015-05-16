/* jshint node: true */
'use strict';

var StaticCompiler = require('./lib/compiler');

module.exports = {
  name: 'ember-cli-static',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    target.registry.add('html', new StaticCompiler());
  }
};
