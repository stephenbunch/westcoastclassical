import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Test</title>
          <link rel="stylesheet" href="/site.css" />
        </head>
        <body>
          <h1>hello world!</h1>
          <script src="/site.js"></script>
        </body>
      </html>
    );
  }
};
