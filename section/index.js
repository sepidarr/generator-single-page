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
  _sectionTypes: [],
  _sectionLayouts: {},
  _getAllFolders: function( srcpath ) {
    return fs.readdirSync(srcpath).filter(function( file ) {
      return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
  },
  constructor: function() {
    yeoman.Base.apply(this, arguments);

    // TODO: need to review/refactor
    var templatesPath = this.templatePath();
    // console.log(templatesPath);
    this._getAllFolders(templatesPath)
    .forEach(function( section ) {
      this._sectionLayouts[section] = [];
      this._sectionTypes.push(_.capitalize(section));
      this._getAllFolders(__dirname + '/templates/' + section)
      .forEach(function( sectionLayout ) {
        this._sectionLayouts[section].push(sectionLayout);
      }.bind(this));
    }.bind(this));
  },
  prompting: function() {
    var done = this.async();
    var sectionTypePrompts = [{
      name: 'sectionType',
      type: 'list',
      message: 'What section do you need?',
      choices: this._sectionTypes
    }];
    this.prompt(sectionTypePrompts, function( props ) {
      this.sectionType = _.snakeCase(props.sectionType);
      var layoutPropmt = {
        name: 'sectionLayout',
        type: 'list',
        message: 'Select your section layout.',
        choices: this._sectionLayouts[this.sectionType]
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
      id: this.sectionType,
      title: this.sectionType + ':' + this.sectionLayout
    }

    // TODO: need to review/refactor
    var fileBase = Date.now() + '_' + this.sectionType;
    var htmlFile = 'sections/' + fileBase + '_' + this.sectionLayout + '.html';
    var sassFileDestiniation =  'css/sass/sections/' + this.sectionType + '_' + this.sectionLayout + '.sass';
    var templatePath = this.sectionType + '/' + this.sectionLayout + '/' + 'layout.html';
    var sassFileSource = this.sectionType + '/' + this.sectionLayout + '/' + 'layout.sass';

    this.template(templatePath, htmlFile, context);
    this.fs.copy(
      this.templatePath(sassFileSource),
      this.destinationPath(sassFileDestiniation)
    );
  },
  end: function() {
    console.log('SectionGenerator: All done!');
  }
});

module.exports = SectionGenerator;
