/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	extname = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'utils-extname', function tests() {

	it( 'should export a function', function test() {
		expect( extname ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a filename which is not a string', function test() {
		var values,
			i;

		values = [
			5,
			null,
			NaN,
			true,
			undefined,
			[],
			{},
			function(){}
		];

		for ( i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function badValue() {
				extname( value );
			};
		}
	});

	it( 'should return a filename extension', function test() {
		var expected,
			values,
			i;

		values = [
			'index.js',
			'foo/bar/home.html',
			'.gitignore',
			'.travis.yml',
			'/foo/bar/README.md'
		];

		expected = [
			'.js',
			'.html',
			'',
			'.yml',
			'.md'
		];

		for ( i = 0; i < values.length; i++ ) {
			assert.strictEqual( extname( values[ i ] ), expected[ i ], values[ i ] );
		}
	});

});
