import React from 'react';

export default class ListItem extends React.Component {
  render() {
    return (
      <li className="List-item">
        { this.props.children }
      </li>
    );
  }
};
