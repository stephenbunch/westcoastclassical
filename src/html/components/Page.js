import React from 'react';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import MainNavigation from './MainNavigation';

export default class Page extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width" />
          <meta httpEquiv="Content-Security-Policy" content="default-src * 'unsafe-eval' 'unsafe-inline'" />

          <title>{ this.props.title.toLowerCase() } | WCC</title>

          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="stylesheet" href="/fonts/aphrodite-slim-stylistic/font.css" />
          <link rel="stylesheet" href="/site.css" />
        </head>
        <body className="RowLayout">
          <PageHeader />
          <MainNavigation />
          <div className="Grid PageBody u-layoutItemFill">
            { this.props.children }
          </div>
          <PageFooter />
          <script src="/site.js"></script>
        </body>
      </html>
    );
  }
};
