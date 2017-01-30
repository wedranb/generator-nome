'use strict';
const Generator = require('yeoman-generator');
const normalizeUrl = require('normalize-url');
const chalk = require('chalk');
const yosay = require('yosay');
const humanizeUrl = require('humanize-url');
const _s = require('underscore.string');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-nome') + ' generator!'
    ));

    const prompts = [
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: _s.slugify(this.appname),
        filter: x => moduleName.slugify(x)
      },
      {
        name: 'moduleDescription',
        message: 'What is your module description?',
        default: `My ${superb()} module`
      },
      {
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        store: true,
        validate: x => x.length > 0 ? true : 'You have to provide a username',
      },
      {
        name: 'website',
        message: 'What is the URL of your website?',
        store: true,
        validate: x => x.length > 0 ? true : 'You have to provide a website URL',
        filter: x => normalizeUrl(x)
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;

      console.log('This props')
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
