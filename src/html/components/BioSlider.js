import React from 'react';
import Bio from './Bio';
import PropTypes from '../util/PropTypes';

export default class BioSlider extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf( PropTypes.componentOf( Bio ) ),
      PropTypes.componentOf( Bio )
    ])
  }

  render() {
    var { className, navClassName, ...rest } = this.props;
    return (
      <div { ...rest } className={ `BioSlider ${ className }` }>
        <div className="BioSlider-slides">
          { this.props.children }
        </div>
        <div className={ `BioSlider-navigation ColumnLayout ColumnLayout--alignCenter ${ navClassName }` }>
          { React.Children.map( this.props.children, slide => {
            return (
              <a href="#" className="BioSlider-thumb">
                 <span className="BioSlider-thumbImage" style={{ backgroundImage: `url('${ slide.props.photo }')` }}></span>
                 <span className="BioSlider-thumbTitle">{ slide.props.name }</span>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
};
