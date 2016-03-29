'use strict';

// -----------------------------------------------------------------------------
// Import required modules
// -----------------------------------------------------------------------------
var yeoman  = require('yeoman-generator'),
    path    = require('path'),
    fs      = require('fs'),
    _       = require('lodash');
// -----------------------------------------------------------------------------

var SectionGenerator = yeoman.Base.extend({
  _sections: {},
  _getAllFolders: function( basePath ) {
    return fs.readdirSync(basePath).filter(function( file ) {
      var filePath = path.join(basePath, file);
      return fs.statSync(filePath).isDirectory() &&
      !(/(^|\/)\.[^\/\.]/g).test(filePath);
    });
  },
  constructor: function() {
    yeoman.Base.apply(this, arguments);

    var sectionNamesArray = this._getAllFolders(this.templatePath());
    _(sectionNamesArray).forEach(function( section ) {
      this._sections[section] = [];
      var sectionLayoutsArray = this._getAllFolders(this.templatePath() + '/' + section);
      _(sectionLayoutsArray).forEach(function( layout ) {
        this._sections[section].push(layout);
      }.bind(this));
    }.bind(this));
  },
  prompting: function() {
    var done = this.async();
    var sectionTypePrompts = [{
      name: 'sectionName',
      type: 'list',
      message: 'What section do you need?',
      choices: _.keys(this._sections)
    }];
    this.prompt(sectionTypePrompts, function( props ) {
      this.sectionName = _.snakeCase(props.sectionName);
      var layoutPropmt = {
        name: 'sectionLayout',
        type: 'list',
        message: 'Select your section layout.',
        choices: this._sections[this.sectionName]
      }
      this.prompt(layoutPropmt, function( props ) {
        this.sectionLayout = _.snakeCase(props.sectionLayout);
        done();
      }.bind(this));
    }.bind(this));
  },
  initialize: function() {
    this.destinationRoot('app');
    var context = {
      id: this.sectionName
    }

    var sectionBasePath = this.sectionName + '/' + this.sectionLayout + '/';

    // TODO: need to review/refactor
    var fileBase = Date.now() + '_' + this.sectionName;
    var htmlFile = 'sections/' + fileBase + '_' + this.sectionLayout + '.html';
    var sassFileDestiniation =  'css/sass/sections/' + this.sectionName + '_' + this.sectionLayout + '.sass';
    var layoutHtmlPath = sectionBasePath + 'layout.html';
    var layoutSassPath = sectionBasePath + 'layout.sass';

    this.template(layoutHtmlPath, htmlFile, context);
    this.fs.copy(
      this.templatePath(layoutSassPath),
      this.destinationPath(sassFileDestiniation)
    );
  },
  end: function() {
    console.log('SectionGenerator: All done!');
  }
});

module.exports = SectionGenerator;
