import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './tabsbar.component.scss';

class TabsbarComponent extends Component {
  render() {
    return (
      <div className="flex tabsbar-wrapper p-2">
          <NavLink
            to="/"
            exact
            activeClassName="tabsbar-active"
          >Summary
          </NavLink>

        <NavLink
          to="/section1"
          exact
          activeClassName="tabsbar-active"
        >Section 1
        </NavLink>

        <NavLink
          to="/section2"
          exact
          activeClassName="tabsbar-active"
        >Section 2
        </NavLink>

        <NavLink
          to="/section3"
          exact
          activeClassName="tabsbar-active"
        >Section 3
        </NavLink>
      </div>
    );
  }
}

export default TabsbarComponent;
