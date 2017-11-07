import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator,TabView } from "react-navigation";
import { Config } from "../config";

const styles = StyleSheet.create({
  label: {
    fontSize: Config.tabTitleSize,
  },
  indicator: {
    //width: Dimensions.get('window').width/2 - 20,
    //marginLeft: 20,
    //marginRight: 20,
    backgroundColor: Config.fontColor,
  },
  tabs: {
    height: Config.TabNavHeight,
    width: 80,
  },
  tab: {
    backgroundColor: Config.mainColor,
    overflow: 'scroll'
  }
});

screenItem = (title)=>(class extends Component {render(){return <Text>{title}</Text>}})


const SpecialColumn = (initialRouteName)=>{
  return TabNavigator({
    Recommend: {
      screen: screenItem('推荐'),
      navigationOptions: { tabBarLabel: '推荐' }
    },
    anime: {
      screen: screenItem('动画'),
      navigationOptions: { tabBarLabel: '动画' }
    },
    game: {
      screen: screenItem('游戏'),
      navigationOptions: { tabBarLabel: '游戏' }
    },
    novel: {
      screen: screenItem('轻小说'),
      navigationOptions: { tabBarLabel: '轻小说' }
    },
    science: {
      screen: screenItem('科技'),
      navigationOptions: { tabBarLabel: '科技' }
    },
    other: {
      screen: screenItem('其他'),
      navigationOptions: { tabBarLabel: '其他' }
    },
  },{
    initialRouteName: initialRouteName,
    tabBarPosition: 'top',
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: Config.fontColor,
      inactiveTintColor: Config.TabUnActivefontColor,
      labelStyle: styles.label,
      tabStyle: styles.tabs,
      scrollEnabled: true,
      style: styles.tab,
      indicatorStyle: styles.indicator,
    },
  });
}
export default class extends Component {
  constructor(props) {
    super(props);
    this.state={
      SpecialColumn: <View />
    }
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    //this.props.navigation.navigate(params.SpecialColumn.keyword)
    const SC = SpecialColumn(params.SpecialColumn.keyword);
    this.setState({
      SpecialColumn: <SC />
    })
  }
  render() {
    const SpecialColumn = this.state.SpecialColumn;
    return SpecialColumn;
  }
};