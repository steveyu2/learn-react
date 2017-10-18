/*
导航逻辑
Stack->Drawer->Tab
 */
import React, { Component } from 'react';
import Stack from './Stack';

class Bilibili extends Component{
  constructor(props) {
    super(props);
    this.state = {
      color: {
        mainColor: '#40E0D0'
      }
    };

    this.setAppState = this.setAppState.bind(this);
    this.getAppState = this.getAppState.bind(this);
  }
  setAppState(stateName, value){
    let state = false;

    switch (stateName){
      case 'setMainColor':
        state = {
          color: {
            mainColor: value
          }
        };
        break;
      default:
    }

    state !== false && this.setState(state);
  }
  getAppState(stateName) {
    let result = null;

    switch (stateName) {
      case 'mainColor':
        result = this.state.color.mainColor;
        break;
      default:
    }

    return result;
  }
  render() {
    return (
      <Stack
        getAppState={ this.getAppState }
        setAppState={ this.setAppState }
      />
    )
  }
}

export default Bilibili;
