import React, { Component } from 'react';

class Section2ChildComponent extends Component {
  constructor() {
    super();
  }

  render() {
    const names = ['Pawel', 'Jan', 'Dominik', 'Krzysztof'];
    const listNames = names.map((name, index) =>
      <div key={index}>Name: {name}</div>
    );

    return (
      <div>
        <div className="mb-2">
          <div>Recreating Input() in React:</div>
          I am a child, name is: {this.props.testProp}
        </div>

        <div>Recreating Output in React:</div>
        <button type="text" className="button button-m button-primary mb-4" onClick={this.props.testPropFunc}>Update parent's test value</button>

        <div>Recreating ngIf in React:</div>
        { this.props.testParentData === '12345' ? <div className="mb-4">Initial data loaded -> {this.props.testParentData}</div> : null}

        <div className="mb-4">
          <div>Recreating ngFor in React:</div>
          {listNames}
        </div>
      </div>
    );
  }
}

export default Section2ChildComponent;
