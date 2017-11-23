import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, ToastAndroid, NetInfo } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import SimplePropTypes from '../../../components/g/simple-prop-types';
import FlatList from '../../../components/g/FlatList';
import LoadFail from '../../../components/LoadFail';
import { Config,Images } from "../../../config";
import TopCompt from "./Top";
import RecommendItem from "./RecommendItem";

class SpecialColumn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      failText: '加载失败'
    }

    this.handleNetInfo()

    this.ClassifyPress=this.ClassifyPress.bind(this)
    this.pullUpRefresh=this.pullUpRefresh.bind(this)
    this.onRefresh=this.onRefresh.bind(this)
  }

  handleNetInfo() {
    // 判断网络状态 设置失败信息
    NetInfo.isConnected.fetch().done((isConnected) => {
      this.setState({ failText: isConnected? '加载失败':'网络好像断开了，请连接网络' })
    });

    NetInfo.isConnected.addEventListener(
      'connectionChange',
      () => this.setState({ failText: '网络好像断开了，请连接网络' })
    );
  }

  /*componentDidMount() {
    const recommendData = this.props.screenProps.specialColumn.recommend.data;
    const bannersData = this.props.screenProps.specialColumn.banners.data;

    // 判断数据是否已经存在
    if(){
      this.onRefresh()
    }

    if(){
    }

  }*/

  toast = (msg) => ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);

  _onPressItem = (id) => {};

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <RecommendItem data={ item }/>
  );

  onRefresh({show, hide}) {
    this.getSpecialColumnSwipeImages()

    this.props.screenProps.fetchSpecialColumnRecommendToBefore(({noMore, error})=>{
      if(!error){
        if(noMore){
          this.toast('没有更多了...');
        }else{
          hide()
        }
      }else{
        if(this.props.screenProps.specialColumn.recommend.data.length === 0){
          show()
        }else{
          this.toast(this.state.failText);
        }
      }
    })
  }

  pullUpRefresh(setRefreshState) {
    setRefreshState('load')
    this.props.screenProps.fetchSpecialColumnRecommendToAfter(({noMore, error})=> {
      if(!error){
        setRefreshState(noMore? 'nomore': null)
      }else{
        setRefreshState('fail')
      }
    })
  }

  // 获取轮播图片
  getSpecialColumnSwipeImages() {
    this.props.screenProps.fetchSpecialColumnBanners()
  }

  // 专栏类型点击事件
  ClassifyPress(type) {
    const {
      _navigation,
    } = this.props.screenProps;

    _navigation.navigate('SpecialColumnStack',{ SpecialColumn: { keyword: type }})
  }

  render() {

    const {
      specialColumn
    } = this.props.screenProps;

    // 是否进行初次渲染
    const firstOnRefresh = specialColumn.recommend.data.length === 0 || specialColumn.banners.data[0].indexOf('http') === -1;

    // 判断是否渲染 来 同步渲染
    const isRender = specialColumn.recommend.data.length > 0 && specialColumn.banners.data.length > 0;

    return (
      <FadeInView style={ styles.wrap }>
        <FlatList
          firstOnRefresh={ firstOnRefresh }
          style={{ flex:1 }}
          refreshComponentColor={ Config.mainColor }
          data={ specialColumn.recommend.data }
          ListHeaderComponent={ <TopCompt images={ specialColumn.banners.data }
                                        onItemPress={ this.ClassifyPress }
                                        screenProps={ this.props.screenProps }
                                        isRender={ isRender }/> }
          keyExtractor={ this._keyExtractor }
          renderItem={ this._renderItem }
          onRefresh={ this.onRefresh }
          onEndReached={ this.pullUpRefresh }
          onEndReachedThreshold={ 0.02 }
          refreshing={ specialColumn.recommend.loading }
          extraData={ specialColumn.recommend }
          failComponent={ LoadFail }
        />
      </FadeInView>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Config.TabNavScreenColor
  }
});

SpecialColumn.propTypes = SimplePropTypes(({ strRq, boolRq, arrOfRq, shape, shapeRq, funcRq })=>({
  screenProps: shapeRq({
    fetchVideoRecommendToBefore: funcRq,
    fetchVideoRecommendToAfter: funcRq,
    _navigation: shapeRq({
      navigate: funcRq,
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
          cover : strRq,
        }))
      })
    })
  })
}))

export default SpecialColumn;