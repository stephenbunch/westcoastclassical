import { browserify, bundle } from './_browserify';
import _ from 'lodash';
import path from 'path';
import configure from './_make:js.config';

export default function( projectDir, done ) {
  var config = configure( projectDir );
  bundle(
    browserify( config.entry, config.options ),
    config.outfile,
    done
  );
};
