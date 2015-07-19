require( 'babel/register' );

var React = require( 'react' );
var pages = require( './src/html' );
pages.forEach( function( page ) {
  if ( !/^\//.test( page.path ) ) {
    page.path = '/' + page.path;
  }
  if ( page.path === '/' ) {
    page.path = 'index.html';
  } else {
    page.path = page.path.substr( 1 ) + '/index.html';
  }
  page.content = React.renderToStaticMarkup( page.content );
});

process.send( JSON.stringify( pages ) );
