'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var glob = require('glob');
var fs = require('fs');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('generator-yeoman-marko') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What would you like to name this component?',
      validate: function (input) {

        var result = input.match(/((?:\w+-)+\w+)/g); // ["eval-u"]

        if (result !== null) {
          return true;

        } else {
          var done = this.async();
          done('The component needs to be hyphenated per marko guidelines');
          return;
        }

      },
      default: 'marko-component'
    },
      {
        type: 'confirm',
        name: 'verbose',
        message: 'Would you like namespaced scaffolding? If you type "no", all files will be blank and not namespaced, including browser.json',
        default: true
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someAnswer;

      done();
    }.bind(this));
  },

  writing: function () {
    var self = this;

    var componentName = this.props.componentName;

    function writeAllFiles(err) {

      if (err) {
        console.log(err);
        return;
      }

      var splitFiles = [];
      glob(self.sourceRoot() + '/*.*', { realpath: false }, function (er, files) {
        var thisFile = '';

        files.forEach(function (fullPath) {
          fullPath = fullPath.split('/');
          thisFile = fullPath[fullPath.length - 1];
          splitFiles.push(thisFile);
        });
        splitFiles.forEach(copyFile);
      });
    };

    function namespaceFiles(file, actualPath) {
      var scaffolding = '';
      if (file === 'template.marko') {
        scaffolding = '<div class="' + componentName + '" w-bind="./widget">\n\n</div>';
        writeToFile(actualPath, scaffolding);

      } else if (file === 'style.less') {
        scaffolding = '.' + componentName + '{\n\n' + '}';
        writeToFile(actualPath, scaffolding);
      } else {
        return;
      }
    }

    function writeToFile(path, content) {
      fs.writeFile(path, content, '', function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log(path, chalk.green('created!'));
        }
      });
    }

    function copyFile(filename) {
      var compPath = componentName + '/' + filename;
      if (self.props.verbose === true) {
        self.conflicter.force = false;

        self.fs.copy(
          self.templatePath(filename),
          self.destinationPath(compPath)
        );
        namespaceFiles(filename, self.destinationPath(compPath));
      } else {
        writeToFile(self.destinationPath(compPath), '');
        return;
      }
    }

    // Create the component folder then write all the files
    mkdirp(componentName, writeAllFiles);
  },

  install: function () {
    this.installDependencies();
  }
});
