import React, { Component } from 'react';
import './navbar.component.scss';

class NavbarComponent extends Component {
  render() {
    return (
      <div className="flex p-4 navbar-wrapper">
        <div className="flex-1">Learning React</div>
        <div className="flex flex-1 flex-justify-end">Pawel Labus</div>
      </div>
    );
  }
}

export default NavbarComponent;
