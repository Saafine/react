import React, { Component } from 'react';
import './section2.component.scss';
import Section2ChildComponent from './child/section2-child.component';

class Section2Component extends Component {
  constructor() {
    super();
    this.updateTestLocally = this.updateTestLocally.bind(this);
    this.updateTestLocallyWithInput = this.updateTestLocallyWithInput.bind(this);
    this.updateTestWithChild = this.updateTestWithChild.bind(this);

    this.state = {
      test: '12345'
    };
  }

  updateTestLocally() {
    this.setState({ test: '2223' });
  }

  updateTestLocallyWithInput(event) {
    this.setState({ test: event.target.value });
  }

  updateTestWithChild() {
    this.setState({ test: '99999'});
  }

  render() {
    return (
      <div>
        <div className="mb-4">
          <div className="bold-700">Parent component:</div>
          <div>
            <input type="text" className="input mb-2" placeholder="Enter value" onChange={ this.updateTestLocallyWithInput } value={ this.state.test }/>
          </div>
          <div className="mb-2">Values manipulated by child: { this.state.test }</div>
          <button className="button button-m button-primary" onClick={ this.updateTestLocally }>
            Update Locally
          </button>
        </div>

        <div className="border-b mt-4 bold-700">Child component:</div>
        <Section2ChildComponent testProp="some passed data" testPropFunc={this.updateTestWithChild} testParentData={this.state.test}/>
      </div>
    );
  }
}

export default Section2Component;
