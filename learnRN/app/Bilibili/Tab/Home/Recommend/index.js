import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, ToastAndroid } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import SubTitle from './SubTitle';
import RecommendList from './RecommendList';

class Recommend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false, // 刷新按钮状态 是否保持刷新
    }
    this.onRefresh = this.onRefresh.bind(this);
  }

  // 组件加载完毕
  componentDidMount() {
    // 获取数据
    this.onRefresh();
  }

  onRefresh() {
    this.setState({
      refreshing: true
    });
    setTimeout(()=>{
      function guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
        });
      }
      let data = [
          {id: guid(), title: "asdasd"},
          {id: guid(), title: "asdasd"},
          {id: guid(), title: "asdasd"},
          {id: guid(), title: "asdasd"},
          {id: guid(), title: "asdasd"},
          {id: guid(), title: "asdasd"},
        ];
      this.setState((prevState, props) => {
        ToastAndroid.show('数据加载成功', ToastAndroid.SHORT);
        return ({
          data: data.concat(prevState.data).map(v=>v),
          refreshing: false
        })
      });
    },2000)
  }

  render() {

    const {
      data,
      refreshing,
      } = this.state;

    return (
      <FadeInView style={[styles.wrap]}>
        <SubTitle title="综合" style={ styles.subTitle }/>
        <RecommendList
          onRefresh={ this.onRefresh }
          refreshing={ refreshing }
          data={ data }
        />
      </FadeInView>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
  },
  subTitle: {
    height: 33,
  }
});

export default Recommend;