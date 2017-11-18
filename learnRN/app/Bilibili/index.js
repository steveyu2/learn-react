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
import {
  fetchVideoRecommendLocal,
  fetchSpecialColumnRecommendLocal,
  fetchSpecialColumnBannersLocal,
  FETCH_DIRECTION
} from './reducers/actions'

const {
  BEFORE,
  AFTER
  } = FETCH_DIRECTION;

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

  _fetchVideoRecommendToBefore = (callback) => {
    this.props.dispatch(fetchVideoRecommendLocal(BEFORE, callback))
  }
  _fetchVideoRecommendToAfter = (callback) => {
    this.props.dispatch(fetchVideoRecommendLocal(AFTER, callback))
  }

  _fetchSpecialColumnRecommendToBefore = (callback) => {
    this.props.dispatch(fetchSpecialColumnRecommendLocal(BEFORE, callback))
  }
  _fetchSpecialColumnRecommendToAfter = (callback) => {
    this.props.dispatch(fetchSpecialColumnRecommendLocal(AFTER, callback))
  }

  _fetchSpecialColumnBanners = () => { this.props.dispatch(fetchSpecialColumnBannersLocal()) }


  render() {

    const {
      video,
      specialColumn,
    } = this.props;

    return (
      <Stack
        screenProps={{
          video,
          fetchVideoRecommendToBefore: this._fetchVideoRecommendToBefore,
          fetchVideoRecommendToAfter: this._fetchVideoRecommendToAfter,
          specialColumn,
          fetchSpecialColumnRecommendToBefore: this._fetchSpecialColumnRecommendToBefore,
          fetchSpecialColumnRecommendToAfter: this._fetchSpecialColumnRecommendToAfter,
          fetchSpecialColumnBanners: this._fetchSpecialColumnBanners
        }}
      />
    )
  }
}

App.propTypes = SimplePropTypes(({ strRq, boolRq, objOfRq, arrOfRq, shape, shapeRq})=>({
  video: shapeRq({
    recommend: shapeRq({
      loading: boolRq,
      data: arrOfRq(arrOfRq(shape({
        title: strRq,
        //videoUrl: strRq,
        imageUrl: strRq,
        videoTime: strRq,
        play: strRq,
        danmu: strRq,
        type: strRq,
      })))
    })
  }),
  specialColumn: shapeRq({
    banners: shapeRq({
      loading: boolRq,
      data: arrOfRq(strRq),
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
        cover : strRq
      }))
    })
  })
}))

function select(state) {
  return state;
}

App = connect(select)(App)

export default Wrap;
