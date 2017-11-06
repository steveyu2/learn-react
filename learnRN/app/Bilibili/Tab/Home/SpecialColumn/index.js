import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import FlatList from '../../../components/g/FlatList';
import { Config,Images } from "../../../config";
import TopCompt from "./Top";
import RecommendItem from "./RecommendItem";

class SpecialColumn extends Component {

  constructor(props) {
    super(props);

    this.state={
      images: undefined,
      RecommendData: [],
    }

    this.ClassifyPress=this.ClassifyPress.bind(this)
  }

  _onPressItem = (id) => {};

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <RecommendItem data={item}/>
  );

  componentDidMount() {
    this.getSpecialColumnSwipeImages()
    this.getSpecialColumnRecommend()
  }

  // 获取轮播图片
  getSpecialColumnSwipeImages() {
    const {
      getAppState
    } = this.props.screenProps;

    getAppState('SpecialColumnSwipeImages', [(data)=>{
      this.setState({
        images: data
      })
    }])
  }

  // 获取推荐文章
  getSpecialColumnRecommend() {
    const {
      getAppState
    } = this.props.screenProps;

    getAppState('SpecialColumnRecommend', [(data)=>{
      this.setState({
        RecommendData: data
      })
    }])
  }

  // 专栏类型点击事件
  ClassifyPress(type) {
    const {
      _navigation,
    } = this.props.screenProps;

    _navigation.navigate('SpecialColumnStack',{SpecialColumn:{keyword: type}})
  }

  render() {

    const {
      screenProps
    } = this.props;

    return (
      <FadeInView style={ styles.wrap }>
        <FlatList
          style={{flex:1}}
          refreshComponentColor={ Config.mainColor }
          data={this.state.RecommendData}
          // onEndReached={pullUpRefresh}
          // onEndReachedThreshold={0.1}
          // refreshing={refreshing}
          // onRefresh={onRefresh}
          ListHeaderComponent={ <TopCompt images={this.state.images}
                                          onItemPress={this.ClassifyPress}
                                          screenProps={screenProps}/> }
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
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

export default SpecialColumn;