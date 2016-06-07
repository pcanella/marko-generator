# generator-marko

> Dead simple Marko component file generator

## Installation

First, install [Yeoman](http://yeoman.io) and generator-marko using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-marko
```

# How to run
```bash
yo marko
```
Note: Make sure you are in the directory that you want the newly generated component folder to be in!


# Choices
When you run `yo marko` you'll have two choices:
```bash
 * What would you like to name this component? # default is marko-component
 * Would you like namespaced scaffolding?
   If you type "no", all files will be blank and not namespaced, including browser.json # Default is "yes"

```

# What it generates
`yo marko` generates the following files:
```
index.js
renderer.js
widget.js
template.marko
style.less
browser.json
mock-data/
unit-tests/
```
FYI: [check out the generated file contents](https://github.com/pcanella/marko-generator/tree/master/generators/app/templates)

If you choose `Y` at the `namespaced scaffolding` step, it will generate `.your-component{}` in your `.less` file and
```html
<div class="your-component" widget="./widget"></div>
```
in your `template.marko` file.

If you choose `N`, then every file will be blank.

## License

MIT © [Patrick Canella](https://pcanella.github.io)


[npm-image]: https://badge.fury.io/js/generator-yeoman-marko.svg
[npm-url]: https://npmjs.org/package/generator-yeoman-marko
[travis-image]: https://travis-ci.org/pcanella/generator-yeoman-marko.svg?branch=master
[travis-url]: https://travis-ci.org/pcanella/generator-yeoman-marko
[daviddm-image]: https://david-dm.org/pcanella/generator-yeoman-marko.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/pcanella/generator-yeoman-marko
