import React, { Component } from 'react';
import './layout.component.scss';

class LayoutComponent extends Component {
  render() {
    return (
      <div className="layout-wrapper">
        { this.props.children }
      </div>
    );
  }
}

export default LayoutComponent;
