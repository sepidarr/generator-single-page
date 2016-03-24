'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var _ = require('lodash');

var SectionGenerator = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
    this.name = _.camelCase(this.name);
  },
  initialize: function() {
    this.destinationRoot('app');
    var context = {
      id: _.lowerCase(this.name),
      title: _.capitalize(this.name)
    }
    var fileBase = Date.now() + '_' + this.name;
    var htmlFile = 'sections/' + fileBase + '.html';

    this.template('_section.html', htmlFile, context);
  },
  end: function() {
    console.log('SectionGenerator: All done!');
  }
});

module.exports = SectionGenerator;
