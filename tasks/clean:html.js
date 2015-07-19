import del from 'del';

export default function( projectDir, done ) {
  del([
    `${ projectDir }/www/**/*.html`,
    `!${ projectDir }/www/site.css`,
    `!${ projectDir }/www/site.js`,
    `!${ projectDir }/img/**/*`,
    `!${ projectDir }/favicon.ico`
  ], done );
};
