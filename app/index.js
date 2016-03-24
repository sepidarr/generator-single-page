'use strict'

var yeoman = require('yeoman-generator');
var path = require('path');
var util = require('util');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

var LandingpageGenerator = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);

    // Get app name (project root folder name) via arguments
    this.argument('appName', { type: String, required: true });
    this.appname = this.appName;
  },
  initializing: function() {
    console.log('Welcome to the Landing Page Generator');
    mkdirp.sync(this.appName);
    mkdirp.sync(this.appName + '/app/css');
    mkdirp.sync(this.appName + '/app/sections');
    mkdirp.sync(this.appName + '/app/css/sass');
    mkdirp.sync(this.appName + '/app/js');
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
      this.destinationPath(this.appName + '/app/css/sass')
    )
    this.fs.copy(
      this.templatePath('_footer.html'),
      this.destinationPath(this.appName + '/app/footer.html')
    );
    this.fs.copy(
      this.templatePath('_GruntFile.js'),
      this.destinationPath(this.appName + '/GruntFile.js')
    );
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath(this.appName + '/package.json')
    );
    this.fs.copy(
      this.templatePath('_bower.json'),
      this.destinationPath(this.appName + '/bower.json')
    );
    this.fs.copy(
      this.templatePath('_.bowerrc'),
      this.destinationPath(this.appName + '/.bowerrc')
    );
    this.fs.copyTpl(
      this.templatePath('_header.html'),
      this.destinationPath(this.appName + '/app/header.html'),
      { landing_title: this.title }
    );
  },
  install: function() {
    this.destinationRoot(this.appName);
    this.installDependencies();
  },
  end: function() {
    this.composeWith('landing-page:section', { args: ['intro'] })
  }
});

module.exports = LandingpageGenerator;
