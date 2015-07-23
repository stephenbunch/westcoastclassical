import React from 'react';
import pages from '../index';

export default class MainNavigation extends React.Component {
  render() {
    return (
      <nav className="main-navigation grid--container">
        <ul className="main-navigation__items column-layout">
          { pages.filter( x => x.path !== '/' ).map( page => {
            return (
              <li key={ page.path }>
                <a href={ page.path } className="main-navigation__item__link">{ page.label }</a>
              </li>
            );
          }) }
        </ul>
      </nav>
    );
  }
};
