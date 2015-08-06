import React from 'react';

export default {
  componentOf( expectedClass ) {
    return function( props, propName, componentName, location, propFullName ) {
      React.PropTypes.element.apply( undefined, arguments );
      if ( props[ propName ].type !== expectedClass ) {
        throw new Error(
          `Invalid ${location} \`${propFullName || propName}\` supplied to ` +
          `\`${componentName}\`, expected a \`${ expectedClass.name }\`.`
        );
      }
    }
  }
};
