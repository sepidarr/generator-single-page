'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var _ = require('lodash');

var SectionGenerator = yeoman.Base.extend({
  _sectionLayouts: {
    'intro': ['Full', 'Standard', 'Minimal'],
    'contact': ['Form', 'Readonly'],
    'how_it_works': ['ImageText', 'Image', 'Text'],
    'testimonies': ['3 rows, 1 column', '3 rows, 2 columns'],
    'team': ['Circular', 'Square'],
    'footer': ['1 row, 1 column', '1 row, 2 columns', '1 row, 3 columns']
  },
  constructor: function() {
    yeoman.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
    this.name = _.camelCase(this.name);
  },
  prompting: function() {
    var done = this.async();
    var sectionTypePrompts = [{
      name: 'sectionType',
      type: 'list',
      message: 'What section do you need?',
      choices: ['Intro', 'Contact', 'How It Works', 'Testimonies', 'Team', 'Footer']
    }];
    this.prompt(sectionTypePrompts, function( props ) {
      this.sectionType = props.sectionType;
      var layoutPropmt = {
        name: 'sectionLayout',
        type: 'list',
        message: 'Select your section layout.',
        choices: this._sectionLayouts[_.snakeCase(this.sectionType)]
      }
      this.prompt(layoutPropmt, function( props ) {
        this.sectionLayout = props.sectionLayout;
        done();
      }.bind(this));
    }.bind(this));
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
