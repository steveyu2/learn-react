import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import FlatList from '../../../components/g/FlatList';
import { Config,Images } from "../../../config";
import TopCompt from "./Top";

class SpecialColumn extends Component {

  constructor(props) {
    super(props);

    this.state={
      images: undefined,
      RecommendData: [],
    }

    this.ClassifyPress=this.ClassifyPress.bind(this)
  }

  _onPressItem = (id) => {

  };

  _keyExtractor = (item, index) => item[0].id;

  _renderItem = ({item}) => (

  );

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

    const {

    } = this.props;

    return (
      <FadeInView style={ styles.wrap }>
        <FlatList
          // style={}
          refreshComponentColor={ Config.mainColor }
          data={data}
          // onEndReached={pullUpRefresh}
          // onEndReachedThreshold={0.1}
          // refreshing={refreshing}
          // onRefresh={onRefresh}
          ListHeaderComponent={ <TopCompt images={} onItemPress={this.ClassifyPress}/> }
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