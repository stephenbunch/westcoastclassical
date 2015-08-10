import React from 'react';

export default class PageHeading extends React.Component {
  render() {
    return (
      <h1 className="u-h1">
        { this.props.children }
      </h1>
    );
  }
};
