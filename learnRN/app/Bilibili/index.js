/*
导航逻辑
Stack->Drawer->Tab
 */
import React, { Component } from 'react';
import Stack from './Stack';
import  from './data';

class Bilibili extends Component{
  constructor(props) {
    super(props);
    this.state = {
      color: {
        mainColor: '#40E0D0'
      },
      data: {
        Recommend: []
      }
    };

    this.setAppState = this.setAppState.bind(this);
    this.getAppState = this.getAppState.bind(this);
  }
  setAppState(stateName, params){
    let state = false;

    switch (stateName){
      case 'setMainColor':
        state = {
          color: {
            mainColor: params[0]
          }
        };
        break;
      case 'setRecommend':
        params[0] = params[0] instanceof Array? params[0]: []
        let Recommend = this.state.data.Recommend;
        state = {
          data: {
            ...this.state,
            Recommend: params[1] == 'before'? params[0].concat(Recommend): Recommend.concat(params[0])
          }
        };
        break;
      default:
    }

    state !== false && this.setState(state);
  }
  getAppState(stateName, params) {
    let result = null;

    switch (stateName) {
      case 'mainColor':
        result = this.state.color.mainColor;
        break;
      case 'Recommend':
        // count before|after,  function
        DATA.getRecommend(params[0],(data)=>{
          this.setAppState('setRecommend', data, params[1])
        }));
        break;
      default:
    }

    return result;
  }
  render() {
    return (
      <Stack
        screenProps={{
          getAppState: this.getAppState,
          setAppState: this.setAppState,
        }}
      />
    )
  }
}

export default Bilibili;

//NetInfo.isConnected.fetch().done(
//  (isConnected) => {
//    callback(isConnected);
//  }
//);