'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' ),
	re = require( 'regex-extname' );


// EXTNAME //

/**
* FUNCTION: extname( filename )
*	Returns a filename extension.
*
* @param {String} filename - filename
* @returns {String} filename extension
*/
function extname( filename ) {
	if ( !isString( filename ) ) {
		throw new TypeError( 'invalid input argument. Filename must be a primitive string. Value: `' + filename + '`.' );
	}
	return re.exec( filename )[ 1 ];
} // end FUNCTION cwd()


// EXPORTS //

module.exports = extname;
