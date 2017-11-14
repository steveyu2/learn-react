/*
导航逻辑
Stack->Drawer->Tab
 */
import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Stack from './Stack';
import reducers from './reducers'

let store = createStore(reducers)

class Bilibili extends Component{

  render() {
    return (
      <Provider store={ store }>
        <Stack
          screenProps={{}}
        />
      </Provider>
    )
  }
}

export default Bilibili;
