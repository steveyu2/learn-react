import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text } from 'react-native';
import { Config } from '../config';
import Drawer from '../Drawer';
import History from './History';
import Download from './Download';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Config.mainColor
  },

headerText: {
    fontSize: 15,
  }
});

const Stack = StackNavigator({
  HomeStack: {
    screen: Drawer,
    navigationOptions: {
      title: '首页',
      header: null
    }
  },
  HistoryStack: {
    screen: History,
    navigationOptions: {
      title: '历史记录'
    }
  },
  DownloadStack: {
    screen: Download,
    navigationOptions: {
      title: '下载'
    }
  }
},{
  initialRouteName: 'HomeStack', // 默认屏幕
  initialRouteParams: { foo: 'bar' }, // 初始路由参数
  headerMode: 'screen',
  navigationOptions:{
    headerStyle: styles.header, // 头部样式
    headerTintColor: '#fff', // 标题及返回按钮的颜色
    headerTitleStyle: styles.headerText, // 标题样式
  }
});

export default Stack;
