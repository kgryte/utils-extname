'use strict';

var fs = require( 'fs' ),
	path = require( 'path' ),
	extname = require( './../lib' );

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

