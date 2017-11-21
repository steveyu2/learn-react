import React, { PureComponent, Component } from 'react';
import { StyleSheet, View, ToastAndroid, Text, Button } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import SubTitle from './SubTitle';
import { Config,Images } from "../../../config";
import RecommendList from './RecommendList';
import SimplePropTypes from '../../../components/g/simple-prop-types';

class Recommend extends PureComponent {

  constructor(props) {
    super(props);
    this.onRefresh = this.onRefresh.bind(this);
    this.pullUpRefresh = this.pullUpRefresh.bind(this);
  }

  // 组件加载完毕
  /*componentDidMount() {
    const data = this.props.screenProps.video.recommend.data;

    // 判断数据是否已经存在
    if(data.length === 0){
      this.onRefresh();
    }
  }*/

  onRefresh({show, hide}) {
    this.props.screenProps.fetchVideoRecommendToBefore(({noMore, error})=>{
      if(!error){
        if(noMore){
          ToastAndroid.showWithGravity('没有更多了...', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }else{
          hide()
        }
      }else{
        if(this.props.screenProps.video.recommend.data.length === 0){
          show()
        }else{
          ToastAndroid.showWithGravity('获取失败', ToastAndroid.SHORT, ToastAndroid.CENTER);
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


  render() {
    const {
      screenProps
    } = this.props;

    const {
      _navigation,
      video
    } = screenProps;

// debugger
    return (
      <FadeInView style={[ styles.wrap ]}>
        <SubTitle title="综合" style={ styles.subTitle } _navigation={ _navigation }/>
        <View style={ styles.content }>
          <RecommendList
            firstOnRefresh={ video.recommend.data.length === 0 }
            extraData={ video.recommend }
            onRefresh={ this.onRefresh }
            pullUpRefresh={ this.pullUpRefresh }
            refreshing={ video.recommend.loading }
            data={ video.recommend.data }
            failComponent={class extends Component{
              render() {
                return (
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 200
                  }}>
                    <Text style={{ marginRight: 10 }}>加载失败了</Text>
                    <Button onPress={ this.props.onPress } style={{ height: 10 }} title="点击重试"/>
                    <Text style={{ marginLeft: 10  }}>:  )</Text>
                  </View>
                )
              }
            }}
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
    })
  })
}))

export default Recommend;