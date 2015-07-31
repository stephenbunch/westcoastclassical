require( 'babel/register' )({
  optional: [ 'es7.classProperties' ]
});

var React = require( 'react' );

var RootComponent = React.createClass({
  childContextTypes: {
    path: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      path: this.props.path
    };
  },

  render: function() {
    return React.createElement( this.props.html );
  }
});

var pages = require( './src/html/index' );
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
  var content = React.renderToStaticMarkup(
    React.createElement( RootComponent, {
      html: page.html,
      path: page.path
    })
  );
  return {
    path: path,
    content: content
  };
});

process.send( JSON.stringify( pages ) );
