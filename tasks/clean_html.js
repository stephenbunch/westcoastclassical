import del from 'del';

export default function( projectDir, done ) {
  del([
    `${ projectDir }/www/**`,
    `!${ projectDir }/www`,
    `!${ projectDir }/www/site.css`,
    `!${ projectDir }/www/site.js`,
    `!${ projectDir }/www/img`,
    `!${ projectDir }/www/img/**/*`,
    `!${ projectDir }/www/fonts`,
    `!${ projectDir }/www/fonts/**/*`,
    `!${ projectDir }/www/favicon.ico`
  ], done );
};
