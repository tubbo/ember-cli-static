/* jshint node: true */
'use strict';

var Compiler = require('./lib/compiler'),
    fs = require('fs'),
    path = require('path');

module.exports = {
  name: 'ember-cli-static',

  options: {
    resources: ['pages']
  },

  included: function(app) {

    this.options.resources.forEach(function(resource) {
      var pages = [];

      fs.readdir(path.join('app', resource), function(file) {
        var page = new Compiler(resource, path.basename(file));
        pages.push(page.attributes);
        page.write();
      });

      fs.writeFile('public/'+resource+'.json', pages.toJSON());
    });
  }
};
