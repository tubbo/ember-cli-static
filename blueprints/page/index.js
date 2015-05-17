var titleize = require('titleize');

module.exports = {
  description: 'Generate a static page',

  availableOptions: {
    name: 'page-name'
  }

  locals: function(options) {
    return {
      title: titleize(options.title),
      filename: options.name
    }
  }
};
