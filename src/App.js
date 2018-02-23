import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


/**
 * Components
 */
import NavbarComponent from './components/navbar/navbar.component';
import TabsbarComponent from './components/tabsbar/tabsbar.component';
import SummaryComponent from './components/summary/summary.component';
import LayoutComponent from './components/layout/layout.component';
import Section1Component from './components/section 1/section1.component';
import Section2Component from './components/section 2/section2.component';
import Section3Component from './components/section 3/section3.component';

/**
 * Styles
 */
import './App.scss';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <NavbarComponent></NavbarComponent>
            <TabsbarComponent></TabsbarComponent>
            <LayoutComponent>
              <Route exact path="/" component={ SummaryComponent }/>
              <Route path="/section1" component={ Section1Component }/>
              <Route path="/section2" component={ Section2Component }/>
              <Route path="/section3" component={ Section3Component }/>
            </LayoutComponent>
          </div>
        </Router>
    );
  }
}

export default App;
