require( 'babel/register' );

var gulp = require( 'gulp' );
var sequence = require( 'run-sequence' );
var serve = require( './tasks/serve' );

[
  'clean:html',
  'clean:css',
  'clean:js',
  'make:html',
  'make:css',
  'make:js'
].forEach( function( task ) {
  gulp.task( task, require( './tasks/' + task ).bind( undefined, __dirname ) );
});

gulp.task( 'clean', [ 'clean:html', 'clean:css', 'clean:js' ] );
gulp.task( 'make', [ 'make:html', 'make:css', 'make:js' ] );
gulp.task( 'serve', serve.bind( undefined, __dirname ) );

gulp.task( 'default', function( done ) {
  sequence( 'clean', 'make', 'serve', done );
});
