/*
导航逻辑
Stack->Drawer->Tab
 */
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import SimplePropTypes from './components/g/simple-prop-types';
import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation';
import storage from './storage';
import { createStore, applyMiddleware, dispatch } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Stack from './Stack';
import {
  FETCH_DIRECTION,
  setMainColor
} from './reducers/actions'
import {
  fetchVideoRecommend,
  fetchSpecialColumnRecommend,
  fetchSpecialColumnBanners,
  fetchSingleVideo
}  from './reducers/actions'

const {
  BEFORE,
  AFTER
  } = FETCH_DIRECTION;

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

// 竖屏幕显示
Orientation.lockToPortrait();

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

  componentDidMount() {

    // 检测本地是否保存主题   加载完成再隐藏启动屏幕
    storage.load({
      key: 'mainColor'
    }).then((v)=>{
        this._setMainColor(v)
        this.splashScreenHide()
    }, this.splashScreenHide)
    .catch(this.splashScreenHide)
  }

  // 隐藏启动屏幕
  splashScreenHide = ()=>SplashScreen.hide()

  _fetchVideoRecommendToBefore = (callback) => {
    this.props.dispatch(fetchVideoRecommend(BEFORE, callback))
  }
  _fetchVideoRecommendToAfter = (callback) => {
    this.props.dispatch(fetchVideoRecommend(AFTER, callback))
  }

  _fetchSpecialColumnRecommendToBefore = (callback) => {
    this.props.dispatch(fetchSpecialColumnRecommend(BEFORE, callback))
  }
  _fetchSpecialColumnRecommendToAfter = (callback) => {
    this.props.dispatch(fetchSpecialColumnRecommend(AFTER, callback))
  }

  _fetchSpecialColumnBanners = () => { this.props.dispatch(fetchSpecialColumnBanners()) }

  _fetchSingleVideo = (id) => { this.props.dispatch(fetchSingleVideo(id)) }

  _setMainColor = (color) => {
    this.props.dispatch(setMainColor(color))
  }

  render() {

    const {
      video,
      specialColumn,
      mainColor
    } = this.props;

    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={mainColor}/>
        <Stack
          screenProps={{
            video,
            fetchVideoRecommendToBefore: this._fetchVideoRecommendToBefore,
            fetchVideoRecommendToAfter: this._fetchVideoRecommendToAfter,
            fetchSingleVideo: this._fetchSingleVideo,
            specialColumn,
            fetchSpecialColumnRecommendToBefore: this._fetchSpecialColumnRecommendToBefore,
            fetchSpecialColumnRecommendToAfter: this._fetchSpecialColumnRecommendToAfter,
            fetchSpecialColumnBanners: this._fetchSpecialColumnBanners,
            mainColor: mainColor,
            setMainColor: this._setMainColor
          }}
        />
      </View>
    )
  }
}

App.propTypes = SimplePropTypes(({ str, strRq, boolRq, objOf, objOfRq, arrOfRq, shape, shapeRq})=>({
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
        type: strRq
      })))
    }),
    details: objOf(shape({
      id: strRq,
      loading: boolRq,
      data: shape({
        title: str,
        //videoUrl: strRq,
        imageUrl: str,
        videoTime: str,
        play: str,
        danmu: str,
        type: str
      })
    }))
  }),
  specialColumn: shapeRq({
    banners: shapeRq({
      loading: boolRq,
      data: arrOfRq(strRq)
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
  }),
  mainColor: strRq
}));

function select(state) {
  return state;
}

App = connect(select)(App);

export default Wrap;
