import gulp from 'gulp';
import sass from 'gulp-sass';
import minify from 'gulp-minify-css';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer-core';
import path from 'path';
import cssGlobbing from 'gulp-css-globbing';
import concat from 'gulp-concat';

export default function( projectDir ) {
  const ENTRY = `${ projectDir }/src/css/index.scss`;
  const OUTFILE = `${ projectDir }/www/site.css`;
  const INCLUDE_PATHS = [];

  return gulp.src( ENTRY )
    .pipe(
      cssGlobbing({
        extensions: [ '.scss' ]
      })
    )
    .pipe(
      sass({
        loadPath: [ path.dirname( ENTRY ) ],
        includePaths: INCLUDE_PATHS,
        errLogToConsole: true
      })
      .on( 'error', err => console.log( err ) )
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: [ 'last 2 versions' ]
        })
      ])
    )
    .pipe( concat( path.basename( OUTFILE ) ) )
    .pipe(
      minify({
        keepSpecialComments: 0
      })
    )
    .pipe( gulp.dest( path.dirname( OUTFILE ) ) );
};
