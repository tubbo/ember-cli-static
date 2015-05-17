/* jshint node: true */
'use strict';

var Compiler = require('./lib/compiler');

module.exports = {
  name: 'ember-cli-static',

  static: {
    resources: [{
      name: 'pages',
      idRecipe: ['title']
    }]
  },

  included: function(app) {
    Compiler.compile(this.static.resources);
  }
};
