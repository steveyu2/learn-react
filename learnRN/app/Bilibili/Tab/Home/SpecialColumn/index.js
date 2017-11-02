import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import { Config,Images } from "../../../config";
import ImgSwiper from "./ImgSwiper";
import ClassifyBtn from "./ClassifyBtn";

class SpecialColumn extends Component {

  constructor(props) {
    super(props);

    this.state={
      images: undefined
    }

    this.ClassifyPress=this.ClassifyPress.bind(this)
  }

  componentDidMount() {
    this.getSpecialColumnSwipeImages()
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

  // 专栏类型点击事件
  ClassifyPress(type) {
    const {
      _navigation,
    } = this.props.screenProps;

    _navigation.navigate('SpecialColumnStack',{SpecialColumn:{keyword: type}})
  }

  render() {

    return (
      <FadeInView style={ styles.wrap }>
        <View style={styles.top}>
          <ImgSwiper data={this.state.images}/>
          <ClassifyBtn onItemPress={this.ClassifyPress}/>
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
  top: {
    padding: Config.TabNavScreenPadding,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  }
});

export default SpecialColumn;