'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const normalizeUrl = require('normalize-url');
const humanizeUrl = require('humanize-url');
const _s = require('underscore.string');
const moduleName = require('./module-name');
const fs = require('fs');

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
        default: `My legendary module`
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
    }.bind(this));
  },

  writing: function () {
    const repoName = moduleName.repoName(this.props.moduleName);

    const template = {
      moduleName: this.props.moduleName,
      moduleDescription: this.props.moduleDescription,
      camelModuleName: _s.camelize(repoName),
      githubUsername: this.props.githubUsername,
      repoName,
      name: this.user.git.name(),
      email: this.user.git.email(),
      website: this.props.website,
      humanizedWebsite: humanizeUrl(this.props.website)
    };

    this.fs.copyTpl([
      `${this.templatePath()}/**`,
    ], this.destinationPath(), template);

    const mv = (from, to) => {
      this.fs.move(this.destinationPath(from), this.destinationPath(to));
    };

    mv('gitignore', '.gitignore');
    mv('gitattributes', 'gitattributes');
    mv('editorconfig', '.editorconfig');
  },

  install: function () {
    this.installDependencies({ bower: false });
  }
});
