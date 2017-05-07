
const assert = require( "assert" );
const maxelm = require( "./maxelm.js" );

assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ) > 4, true, "should be true" );

assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ) > 6, false, "should be false" );

assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ), 5, "should be '5'" );

assert.equal( maxelm( [ 1, 2, 3, 4, 5 ] ).compare( 7 ), true, "should be true" );

console.log( "ok" );
