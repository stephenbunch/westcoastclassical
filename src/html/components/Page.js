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

          <title>{ this.props.title } | West Coast Classical</title>

          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic" />
          <link rel="stylesheet" href="/site.css" />
        </head>
        <body className="row-layout">
          <PageHeader />
          <MainNavigation />
          <div className="grid--container page-body layout__item--expand">
            { this.props.children }
          </div>
          <PageFooter />
          <script src="/site.js"></script>
        </body>
      </html>
    );
  }
};
