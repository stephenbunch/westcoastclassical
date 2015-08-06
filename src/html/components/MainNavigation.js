import React from 'react';
import pages from '../index';

export default class MainNavigation extends React.Component {
  static contextTypes = {
    path: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className="MainNavigation Grid">
        <ul className="MainNavigation-items ColumnLayout">
          { pages.filter( x => x.path !== '/' ).map( page => {
            return (
              <li key={ page.path }
                  className={ `
                    MainNavigation-item
                    ${ page.path === this.context.path ? 'MainNavigation-item--current' : ''
                  }` }>
                <a href={ page.path } className="MainNavigation-itemLink">{ page.label }</a>
              </li>
            );
          }) }
        </ul>
      </nav>
    );
  }
};
