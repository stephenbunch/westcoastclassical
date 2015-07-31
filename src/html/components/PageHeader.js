import React from 'react';

export default class PageHeader extends React.Component {
  render() {
    return (
      <header className="page-header column-layout grid--container column-layout--align-bottom">
        <a href="/" className="page-header__logo">
          <img className="page-header__logo__image" src="/img/logo.png" />
        </a>
        <div className="layout__item--expand"></div>
        <div className="main-search layout__item--fixed">
          <input id="mainSearch" className="main-search__input" placeholder="search"></input>
          <button className="main-search__button">search</button>
        </div>
      </header>
    );
  }
};
