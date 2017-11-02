import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Config } from "../config";

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

const SpecialColumn = (initialRouteName)=>{
  return TabNavigator({
    Recommend: {
      screen: class extends Component {
        //componentDidMount() {
        //  const { params } = this.props.navigation.state;
        //  this.props.navigation.navigate(params.SpecialColumn.keyword)
        //}
        render() {
          return <Text>推荐</Text>
        }
      },
      navigationOptions: { tabBarLabel: '推荐' }
    },
    anime: {
      screen: class extends Component {componentDidMount(){alert('11')}render(){return <Text>动画</Text>}},
      navigationOptions: { tabBarLabel: '动画' }
    },
    game: {
      screen: class extends Component {render(){return <Text>游戏</Text>}},
      navigationOptions: { tabBarLabel: '游戏' }
    },
    novel: {
      screen: class extends Component {render(){return <Text>轻小说</Text>}},
      navigationOptions: { tabBarLabel: '轻小说' }
    },
    science: {
      screen: class extends Component {render(){return <Text>科技</Text>}},
      navigationOptions: { tabBarLabel: '科技' }
    },
    other: {
      screen: class extends Component {render(){return <Text>其他</Text>}},
      navigationOptions: { tabBarLabel: '其他' }
    },
  },{
    initialRouteName: initialRouteName,
    tabBarPosition: 'top',
    animationEnabled: false,
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
}
export default class extends Component {
  constructor(props) {
    super(props);
    this.SpecialColumn = <View />
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    //this.props.navigation.navigate(params.SpecialColumn.keyword)
    const SC = SpecialColumn(params.SpecialColumn.keyword);
    this.SpecialColumn = <SC />
  }
  render() {
    const SpecialColumn = this.SpecialColumn;
    return SpecialColumn;
  }
};