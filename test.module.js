"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "maxelm",
			"path": "maxelm/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/maxelm.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"maxelm": "maxelm"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const maxelm = require( "./maxelm.js" );
//: @end-server

//: @client:
const maxelm = require( "./maxelm.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "maxelm", ( ) => {
	
	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] ) > 4"`, ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ) > 4, true );

		} );
	} );

	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] ) > 6"`, ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ) > 6, false );

		} );
	} );

	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] )"`, ( ) => {
		it( "should be equal to 5", ( ) => {

			assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ), 5 );

		} );
	} );

	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] ).compare( 7 )"`, ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ).compare( 7 ), true );

		} );
	} );
} );


//: @end-server


//: @client: 


describe( "maxelm", ( ) => {
	
	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] ) > 4"`, ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ) > 4, true );

		} );
	} );

	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] ) > 6"`, ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ) > 6, false );

		} );
	} );

	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] )"`, ( ) => {
		it( "should be equal to 5", ( ) => {

			assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ), 5 );

		} );
	} );

	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] ).compare( 7 )"`, ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ).compare( 7 ), true );

		} );
	} );
} );



//: @end-client


//: @bridge:

describe( "maxelm", ( ) => {

	
	let directory = __dirname;
	let testBridge = path.resolve( directory, "bridge.html" );
	let bridgeURL = `file://${ testBridge }`;

	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] ) > 4"`, ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal(disdo ( true, true ) );

		} );
	} );

	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] ) > 6"`, ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal(disdo ( true, true ) );

		} );
	} );

	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] )"`, ( ) => {
		it( "should be equal to 5", ( ) => {

			assert.equal(disdo ( true, true ) );

		} );
	} );

	describe( `"maxelm( [ 1, 2, 3, 4, 5 ] ).compare( 7 )"`, ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal(disdo ( true, true ) );

		} );
	} );


	
} );

//: @end-bridge
