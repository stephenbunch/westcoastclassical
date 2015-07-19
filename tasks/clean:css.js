import del from 'del';

export default function( projectDir, done ) {
  del([
    `${ projectDir }/www/site.css`
  ], done );
};
