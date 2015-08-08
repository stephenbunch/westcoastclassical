import React from 'react';

export default class PageContent extends React.Component {
  render() {
    var { className, ...rest } = this.props;
    return (
      <div { ...rest } className={ `Page-content ${ className }` }>
        { this.props.children }
      </div>
    )
  }
};
