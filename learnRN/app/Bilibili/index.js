/*
导航逻辑
Stack->Drawer->Tab
 */
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk';
import Stack from './Stack';
import PropTypes from 'prop-types';
import SimplePropTypes from './components/g/simple-prop-types'
import reducers from './reducers'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class Wrap extends Component{

  render() {
    return (
      <Provider store={ store }>
        <App/>
      </Provider>
    )
  }
}

class App extends Component{
  render() {

    const {
      video,
      specialColumn,
    } = this.props;

    return (
      <Stack
        screenProps={{
          video,
          specialColumn
        }}
      />
    )
  }
}

App.propTypes = (({ strRq, boolRq, objOfRq, arrOfRq, shape, shapeRq})=>({
  video: shapeRq({
    recommend: shapeRq({
      loading: boolRq,
      data: arrOfRq(shape({
        title: strRq,
        videoUrl: strRq,
        imageUrl: strRq,
        videoTime: strRq,
        play: strRq,
        danmu: strRq,
        type: strRq,
      }))
    })
  }),
  specialColumn: shapeRq({
    banners: shapeRq({
      loading: boolRq,
      data: arrOfRq(shape({})),
    }),
    recommend: shapeRq({
      loading: boolRq,
      data: arrOfRq(shape({
        title: strRq,
        info: strRq,
        faceImg: strRq,
        nikeName: strRq,
        type: strRq,
        view: strRq,
        like : strRq,
        reply : strRq,
        cover : strRq,
      }))
    })
  })
}))(SimplePropTypes);

function select(state) {
  return state;
}

App = connect(select)(App)

export default Wrap;
