import React from 'react';
import ListItem from './ListItem';
import PropTypes from '../util/PropTypes';

export default class List extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf( PropTypes.componentOf( ListItem ) ),
      PropTypes.componentOf( ListItem )
    ])
  }

  render() {
    return (
      <ul className="List">
        { this.props.children }
      </ul>
    );
  }
};
