import React, { PureComponent } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, ToastAndroid } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import SubTitle from './SubTitle';
import RecommendList from './RecommendList';

class Recommend extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false, // 刷新按钮状态 是否保持刷新
    }
    this.onRefresh = this.onRefresh.bind(this);
  }

  // 组件加载完毕
  componentDidMount() {
    // 获取数据
    // debugger
    if(this.props.screenProps.getAppState('recommend').length === 0){
      this.onRefresh();
    }
  }

  onRefresh() {
    this.setState({
      refreshing: true
    },()=>{
      this.props.screenProps.getAppState('newRecommend',[6,'before',()=>{
        this.setState({
          refreshing: false
        });
      }])
    });
  }

  render() {

    const {
      refreshing,
      } = this.state;
    const {
      screenProps
    } = this.props;
// debugger
    return (
      <FadeInView style={[styles.wrap]}>
        <SubTitle title="综合" style={ styles.subTitle }/>
        <View style={ styles.content }>
          <RecommendList
            onRefresh={ this.onRefresh }
            refreshing={ refreshing }
            data={ screenProps.getAppState('recommend') }
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
  },
  subTitle: {
    height: 33,
  },
  content: {
    //padding: 12,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default Recommend;