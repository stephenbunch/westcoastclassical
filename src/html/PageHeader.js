import React from 'react';
import pages from './index';

export default class PageHeader extends React.Component {
  render() {
    return (
      <header className="page-header row-layout">
        <a href="/" className="page-header__logo">
          <img src="/img/logo.png" />
        </a>
        <nav className="main-nav">
          <ul className="main-nav__items column-layout">
            { pages.filter( x => x.path !== '/' ).map( page => {
              return (
                <li key={ page.path }>
                  <a href={ page.path }>{ page.label }</a>
                </li>
              );
            }) }
          </ul>
        </nav>
      </header>
    );
  }
};
