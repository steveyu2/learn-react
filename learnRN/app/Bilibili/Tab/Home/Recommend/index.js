import React, { PureComponent, Component } from 'react';
import { StyleSheet, View, ToastAndroid, Text, Button, NetInfo } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import LoadFail from '../../../components/LoadFail';
import SubTitle from './SubTitle';
import { Config,Images } from "../../../config";
import RecommendList from './RecommendList';
import SimplePropTypes from '../../../components/g/simple-prop-types';

class Recommend extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      failText: '加载失败'
    }

    this.handleNetInfo()

    this.onRefresh = this.onRefresh.bind(this);
    this.pullUpRefresh = this.pullUpRefresh.bind(this);
  }

  handleNetInfo() {
    const setFailText = (isConnected) => {
      this.setState({ failText: isConnected? '加载失败':'网络好像断开了，请连接网络' })
    }

    // 判断网络状态 设置失败信息
    NetInfo.isConnected.fetch().done(setFailText);

    NetInfo.isConnected.addEventListener(
      'connectionChange',
      setFailText
    );
  }

  toast = (msg) => ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);

  // 组件加载完毕
  /*componentDidMount() {
    const data = this.props.screenProps.video.recommend.data;

    // 判断数据是否已经存在
    if(data.length === 0){
      this.onRefresh();
    }
  }*/

  onRefresh({show, hide}) {
    const screenProps = this.props.screenProps;

    screenProps.fetchVideoRecommendToBefore(({noMore, error})=>{
      if(!error){
        if(noMore){
          this.toast('没有更多了...')
        }else{
          hide()
        }
      }else{
        if(screenProps.video.recommend.data.length === 0){
          show()
        }else{
          this.toast(this.state.failText)
        }
      }
    })
  }

  pullUpRefresh(setRefreshState) {
    setRefreshState('load')
    this.props.screenProps.fetchVideoRecommendToAfter(({noMore, error})=> {
      if(!error){
        setRefreshState(noMore? 'nomore': null)
      }else{
        setRefreshState('fail')
      }
    })
  }

  _onPressItem = (id, title) => {
    this.props.screenProps.navigation.navigate('VideoStack', { video: {
      currentId: id,
      currentTitle: title
    } })
  }

  render() {
    const {
      screenProps
    } = this.props,
     {
      navigation,
      video
    } = screenProps,
      mainColor = screenProps.mainColor;

// debugger
    return (
      <FadeInView style={[ styles.wrap ]}>
        <SubTitle
          style={ styles.subTitle }
          title="综合"
          navigation={ navigation }
          mainColor={ mainColor }
        />
        <View style={ styles.content }>
          <RecommendList
            onPressItem={ this._onPressItem }
            refreshComponentColor={ mainColor }
            firstOnRefresh={ video.recommend.data.length === 0 }
            extraData={ video.recommend }
            onRefresh={ this.onRefresh }
            pullUpRefresh={ this.pullUpRefresh }
            refreshing={ video.recommend.loading }
            data={ video.recommend.data }
            failComponent={ LoadFail }
          />
        </View>
      </FadeInView>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Config.TabNavScreenColor
  },
  subTitle: {
    height: 38
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    //padding: 12,
    // alignItems: 'center',
  }
});

Recommend.propTypes = SimplePropTypes(({ strRq, boolRq, arrOfRq, shape, shapeRq, funcRq })=>({
  screenProps: shapeRq({
    fetchVideoRecommendToBefore: funcRq,
    fetchVideoRecommendToAfter: funcRq,
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
      })
    }),
    navigation: shapeRq({
      navigate: funcRq,
    }),
    mainColor: strRq
  }),
}))

export default Recommend;