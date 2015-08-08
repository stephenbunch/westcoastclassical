import React from 'react';

export default class PageSection extends React.Component {
  render() {
    return (
      <div className="Page-section">
        <h2 className="Page-sectionTitle">{ this.props.title }</h2>
        { this.props.children }
      </div>
    );
  }
};
