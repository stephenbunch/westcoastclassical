import React from 'react';

export default class PageHeader extends React.Component {
  render() {
    return (
      <header className="PageHeader ColumnLayout Grid ColumnLayout--alignBottom">
        <a href="/" className="PageHeader-logo">
          <img className="PageHeader-logoImage" src="/img/logo.png" />
        </a>
        <div className="u-layoutItemFill"></div>
        <div className="MainSearch u-layoutItemFixed">
          <input id="mainSearch" className="MainSearch-input" placeholder="search"></input>
          <button className="MainSearch-button">search</button>
        </div>
      </header>
    );
  }
};
