/*
导航逻辑
Stack->Drawer->Tab
 */
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import Stack from './Stack';
import reducers from './reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

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
