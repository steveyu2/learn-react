import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Config } from "../../config";
import Bangumi from "./Bangumi";
import Recommend from "./Recommend";

const styles = StyleSheet.create({
  label: {
    fontSize: Config.tabTitleSize
  },
  indicator: {
    //width: Dimensions.get('window').width/2 - 20,
    //marginLeft: 20,
    //marginRight: 20,
    backgroundColor: Config.fontColor,
  },
  tabs: {
    height: Config.TabNavHeight,
  },
  tab: {
    backgroundColor: Config.mainColor,
  }
});

const Home = TabNavigator({
  TabHomeRecommend: {
    screen: Recommend,
     navigationOptions: {
       tabBarLabel: '推荐',
     }
  },
  TabHomeBangumi: {
    screen: Bangumi,
     navigationOptions: {
       tabBarLabel: '追番',
     }
  },
},{
  tabBarPosition: 'top',
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: Config.fontColor,
    inactiveTintColor: Config.TabUnActivefontColor,
    labelStyle: styles.label,
    tabStyle: styles.tabs,
    style: styles.tab,
    indicatorStyle: styles.indicator,
  },
});

// 因为下一级是navigation的组件
// 所以重写下props
export default class extends Component{
  render() {

    const {
      _navigation,
      screenProps
    } = this.props;

    return <Home screenProps={{
      ...screenProps,
      _navigation
    }}/>
  }
};