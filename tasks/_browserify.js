/**
 * @param {String} entryFile
 * @param {Object} options
 * @returns {Browserify}
 */
export function browserify( entryFile, options ) {
  var _ = require( 'lodash' );
  var browserify = require( 'browserify' );
  var babelify = require( 'babelify' );
  var path = require( 'path' );
  var envify = require( 'envify/custom' );

  options = _.extend( _.cloneDeep( options ), {
    entries: entryFile,
    debug: true
  });

  var bundle =
    browserify( options )
      .transform(
        babelify.configure({
          sourceMapRelative: path.dirname( entryFile )
        })
      )
      .transform( require.resolve( 'require-globify' ) );

  if ( options.shim ) {
    let shim = require( 'browserify-global-shim' );
    bundle = bundle.transform( shim.configure( options.shim ) );
  }

  if ( options.envify ) {
    bundle = bundle.transform( envify( options.envify ) );
  }

  if ( options.uglify ) {
    bundle = bundle.transform({
      global: true,
      ignore: options.noParse || [],
    }, require.resolve( 'uglifyify' ) );
  }

  if ( options.transform ) {
    bundle = options.transform.reduce(
      ( bundle, func ) => bundle.transform( func ), bundle );
  }

  return bundle;
};

/**
 * @param {Browserify}
 * @param {String} outfile
 * @param {Object} [opts]
 * @param {Boolean} [opts.continueOnError]
 * @param {Function} done
 * @returns {stream.Readable}
 */
export function bundle( browserify, outfile, opts, done ) {
  if ( typeof opts === 'function' ) {
    done = opts;
    opts = {};
  }

  var source = require( 'vinyl-source-stream' );
  var path = require( 'path' );
  var gulp = require( 'gulp' );

  var outdir = path.dirname( outfile );
  var outname = path.basename( outfile );

  var stream = browserify.bundle();
  if ( opts && opts.continueOnError ) {
    stream.on( 'error', err => console.log( err ) );
  }

  return stream
    .pipe( source( outname ) )
    .pipe( gulp.dest( outdir ) )
    .on( 'end', done );
};

/**
 * @param {String} entryFile
 * @param {String} outfile
 * @param {Object} options
 * @param {Function} callback
 */
export function watchify( entryFile, outfile, options, callback ) {
  var watchify = require( 'watchify' );
  var _ = require( 'lodash' );

  var b = watchify(
    browserify(
      entryFile,
      _.extend( _.cloneDeep( options ), watchify.args )
    )
  );

  var makeJs = () => {
    bundle( b, outfile, {
      continueOnError: true
    }, callback );
  };

  b.on( 'update', makeJs );
  makeJs();
};
