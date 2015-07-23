import React from 'react';

export default class PageHeader extends React.Component {
  render() {
    return (
      <header className="page-header column-layout grid--container">
        <a href="/" className="page-header__logo">
          <img className="page-header__logo__image" src="/img/logo.png" />
        </a>
      </header>
    );
  }
};
