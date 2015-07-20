require( 'babel/register' );

var React = require( 'react' );
var pages = require( './src/html' );
pages = pages.map( function( page ) {
  var path = page.path;
  if ( !/^\//.test( path ) ) {
    path = '/' + path;
  }
  if ( path === '/' ) {
    path = 'index.html';
  } else {
    path = path.substr( 1 ) + '/index.html';
  }
  var content = React.renderToStaticMarkup( page.content );
  return {
    path: path,
    content: content
  };
});

process.send( JSON.stringify( pages ) );
