Filename Extension
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns a filename extension.


## Installation

``` bash
$ npm install utils-extname
```


## Usage

``` javascript
var extname = require( 'utils-extname' );
```

#### extname( filename )

Returns a filename extension.

``` javascript
var ext = extname( 'index.js' );
// returns '.js'
```


## Examples

``` javascript
var fs = require( 'fs' ),
	path = require( 'path' ),
	extname = require( 'utils-extname' );

var files,
	fpath,
	base,
	stat,
	ext,
	i;

base = path.resolve( __dirname, '..' );
files = fs.readdirSync( base );

for ( i = 0; i < files.length; i++ ) {
	fpath = path.join( base, files[ i ] );
	stat = fs.statSync( fpath );
	if ( !stat.isDirectory() ) {
		ext = extname( fpath );
		console.log( '%s --> %s', fpath, ext || '(no ext)' );
	}
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-extname.svg
[npm-url]: https://npmjs.org/package/utils-extname

[travis-image]: http://img.shields.io/travis/kgryte/utils-extname/master.svg
[travis-url]: https://travis-ci.org/kgryte/utils-extname

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/utils-extname/master.svg
[codecov-url]: https://codecov.io/github/kgryte/utils-extname?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-extname.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-extname

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-extname.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-extname

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-extname.svg
[github-issues-url]: https://github.com/kgryte/utils-extname/issues
