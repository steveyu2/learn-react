/*
导航逻辑
Stack->Drawer->Tab
 */
import React, { Component } from 'react';
import Stack from './Stack';
import  DATA from './data';

class Bilibili extends Component{
  constructor(props) {
    super(props);
    this.state = {
      color: {
        mainColor: '#40E0D0'
      },
      data: {
        Recommend: [],
        SpecialColumnSwipeImages:[]
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
        // debugger
        state = {
          data: {
            ...this.state.data,
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
      case 'newRecommend':
        // count before|after,  function
        DATA.getRecommend(params[0],(data)=>{
          this.setAppState('setRecommend',[data, params[1]])
          params[2]&&params[2]();
        });
      case 'recommend':
        result = this.state.data.Recommend;
        break;
      case 'SpecialColumnSwipeImages':
        result = DATA.getSpecialColumnSwipeImages.apply(DATA, params);
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
//shouldComponentUpdate() {
//  //完全静态的组件,无需更新
//  return false;
//}