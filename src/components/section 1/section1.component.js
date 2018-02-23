import React, { Component } from 'react';
import './section1.component.scss';

import { setUserName } from '../../actions/app.actions';
import { connect } from 'react-redux'


class Section1Component extends Component {
  constructor(){
    super();
    this.updateStore = this.updateStore.bind(this);
  }

  updateStore() {
    this.props.onUsernameChange('test');
  }

  render() {
    return (
      <div>
        Hey I am inside a section 1

        <div className="mb-2">
          <div>Getting state from redux store:</div>
          <div className='bold-700'>{this.props.app.name}</div>
        </div>

        <div>
          <div className="mb-2">Updating redux store:</div>
          <button className="button button-m button-primary" onClick={this.updateStore}>Update!</button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    app: state.appReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUsernameChange: (name) => {
      dispatch(setUserName(name));
    }
  };
};

Section1Component = connect(mapStateToProps, mapDispatchToProps)(Section1Component);
export default Section1Component;
