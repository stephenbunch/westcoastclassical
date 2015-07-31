import React from 'react';
import pages from '../index';

export default class MainNavigation extends React.Component {
  static contextTypes = {
    path: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className="main-navigation grid--container">
        <ul className="main-navigation__items column-layout">
          { pages.filter( x => x.path !== '/' ).map( page => {
            return (
              <li key={ page.path }
                  className={ `
                    main-navigation__item
                    ${ page.path === this.context.path ? 'main-navigation__item--current' : ''
                  }` }>
                <a href={ page.path } className="main-navigation__item__link">{ page.label }</a>
              </li>
            );
          }) }
        </ul>
      </nav>
    );
  }
};
