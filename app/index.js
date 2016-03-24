'use strict'

var yeoman = require('yeoman-generator');
var path = require('path');
var util = require('util');
var chalk = require('chalk');
var mkdirp = require('mkdirp');


var LandingpageGenerator = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);
  },
  initializing: function() {
    console.log('Welcome to the Landing Page Generator');
    mkdirp.sync('landing');
    mkdirp.sync('landing/app/css');
    mkdirp.sync('landing/app/sections');
    mkdirp.sync('landing/app/css/sass');
    mkdirp.sync('landing/app/js');
  },
  prompting: function() {
    var done = this.async();

    var prompts = [{
      name: 'title',
      message: 'What is your landing page title?',
      default: 'The Great Landing Page!'
    }, {
      name: 'slogan',
      message: 'What is your slogan?',
      default: 'My Great Landing Page with an Awesome Slogan!'
    }];

    this.prompt(prompts, function( props ) {
      this.title = props.title;
      this.slogan = props.slogan;

      done();

    }.bind(this));
  },
  writing: function() {
    this.fs.copy(
      this.templatePath('sass/**'),
      this.destinationPath('landing/app/css/sass')
    )
    this.fs.copy(
      this.templatePath('_footer.html'),
      this.destinationPath('landing/app/footer.html')
    );
    this.fs.copy(
      this.templatePath('_GruntFile.js'),
      this.destinationPath('landing/GruntFile.js')
    );
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('landing/package.json')
    );
    this.fs.copy(
      this.templatePath('_bower.json'),
      this.destinationPath('landing/bower.json')
    );
    this.fs.copy(
      this.templatePath('_.bowerrc'),
      this.destinationPath('landing/.bowerrc')
    );
    this.fs.copyTpl(
      this.templatePath('_header.html'),
      this.destinationPath('landing/app/header.html'),
      { landing_title: this.title }
    );
  },
  install: function() {
    this.destinationRoot('landing');
    this.installDependencies();
  },
  end: function() {
    this.composeWith('landing-page:section', { args: ['intro'] })
  }
});

module.exports = LandingpageGenerator;
