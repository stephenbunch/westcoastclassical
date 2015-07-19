import { fork } from 'child_process';
import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';

export default function( projectDir, done ) {
  var app = fork( `${ projectDir }/render.js` );
  app.on( 'message', message => {
    var pages = JSON.parse( message );
    var next = () => {
      if ( pages.length === 0 ) {
        return done();
      }
      var page = pages.shift();
      var filename = `${ projectDir }/www/${ page.path }`;
      mkdirp( path.dirname( filename ), () => {
        fs.writeFile( filename, page.content, next );
      });
    };
    next();
  });
};
