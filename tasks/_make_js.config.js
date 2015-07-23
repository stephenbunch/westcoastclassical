export default function( projectDir ) {
  return {
    entry: `${ projectDir }/src/js/index.js`,
    outfile: `${ projectDir }/www/site.js`,
    options: {}
  };
};
