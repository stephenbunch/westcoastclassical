import React from 'react';

export default class Bio extends React.Component {
  render() {
    return (
      <div className="Bio u-floatGroup">
        <div className="Bio-photo" style={{ backgroundImage: `url('${ this.props.photo}')` }} />
        <span className="Bio-name">{ this.props.name }</span>
        { this.props.children }
      </div>
    );
  }
};
