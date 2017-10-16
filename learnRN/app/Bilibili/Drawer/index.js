import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image, ScrollView, Dimensions  } from 'react-native';
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Config } from "../config";
import Tab from '../Tab';
import Bangumi from './Bangumi';
/**
 * 给跳转stack的路由。占位置的组件
 */
class UselessRoute extends Component{
  render(){
    return <View><Text>UselessRoute</Text></View>
  }
}
/**
 * 判断是否需要跳转到Stack的路由   m: 考虑到有些是要跳弹出页的路由
 * @param route 路由对象
 * @param callback(routeName) 回调
 */
const isStackRoute = (route, callback) => {
  const stackRoute = {
    HistoryDrawer: 'HistoryStack',
    DownloadDrawer: 'DownloadStack'
  };
  const newRoute = stackRoute[route.routeName];

  callback(newRoute !== undefined? newRoute: route.routeName);
};

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
  drawer: {
    marginBottom: 30
  }
});

const Drawer = DrawerNavigator({
  HomeDrawer: {
    screen: Tab,
    navigationOptions: {
      drawerLabel: '首页',
      drawerIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?require("../../../images/icon/favor/favor_fill.png")
              :require("../../../images/icon/favor/favor.png")
          }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  BangumiDrawer: {
    screen: Bangumi,
    navigationOptions: {
      drawerLabel: '番剧',
      title: '番剧',
      drawerIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?require("../../../images/icon/favor/favor_fill.png")
              :require("../../../images/icon/favor/favor.png")
          }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  /**
   * 跳Stack
   */
  HistoryDrawer: {
    screen: UselessRoute, // 占位，不跳路由
    navigationOptions: {
      drawerLabel: '历史记录',
      drawerIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?require("../../../images/icon/favor/favor_fill.png")
              :require("../../../images/icon/favor/favor.png")
          }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  DownloadDrawer: {
    screen: UselessRoute,
    navigationOptions: {
      drawerLabel: '下载',
      drawerIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?require("../../../images/icon/favor/favor_fill.png")
              :require("../../../images/icon/favor/favor.png")
          }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
},{
  initialRouteName: 'HomeDrawer',
  order:[
    'HomeDrawer',
    'BangumiDrawer',
    'HistoryDrawer',
    'DownloadDrawer'
  ],
  contentComponent: props => (
    <ScrollView
      style={styles.drawer}
      >
      <Text>测试</Text>
      <Text>测试</Text>
      <Text>测试</Text>
      <Text>测试</Text>
      <Text>测试</Text>
      <Text>测试</Text>
      <DrawerItems
        {...props}
        onItemPress={
          ({route}) => isStackRoute(route, (routeName) => {
            props.navigation.navigate('DrawerClose');
            setTimeout(() => props.navigation.navigate(routeName), 0);
          })
        }
        activeTintColor={ Config.mainColor }
        activeBackgroundColor={ Config.underlayColor }
      />
    </ScrollView>

  ),
  navigationOptions: {
    title:'标题'
  },
  drawerWidth: Config.drawerWidth, // 侧拉的宽度
});
export default Drawer;



