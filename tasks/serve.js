import portfinder from 'portfinder';
import BrowserSync from 'browser-sync';
import makeHtml from './make_html';
import cleanHtml from './clean_html';
import { watchify } from './_browserify';
import configure from './_make_js.config';
import makeCss from './make_css';

export default function( projectDir, done ) {
  var browserSync = BrowserSync.create()
  portfinder.basePort = process.env.PORT || 3000;
  portfinder.getPort( ( err, port ) => {
    portfinder.getPort( ( err, uiPort ) => {
      browserSync.init({
        port: port,
        ui: {
          port: uiPort
        },
        server: {
          baseDir: `${ projectDir }/www`
        },
        watchOptions: {
          ignoreInitial: true
        },
        files: [{
          match: [
            `${ projectDir }/src/html/**/*.js`,
            `${ projectDir }/pages.js`
          ],
          fn: () => {
            cleanHtml( projectDir, () => {
              makeHtml( projectDir, () => browserSync.reload() );
            });
          }
        }, {
          match: [
            `${ projectDir }/src/css/**/*.scss`
          ],
          fn: () => {
            makeCss( projectDir ).pipe( browserSync.stream() );
          }
        }]
      });
    });
  });

  var config = configure( projectDir );
  watchify(
    config.entry,
    config.outfile,
    config.options,
    () => browserSync.reload()
  );
};
