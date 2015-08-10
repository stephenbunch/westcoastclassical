import React from 'react';

export default class PageSection extends React.Component {
  render() {
    return (
      <div className="PageSection">
        { this.props.title ? <h2 className="u-h2">{ this.props.title }</h2> : null }
        { this.props.children }
      </div>
    );
  }
};
