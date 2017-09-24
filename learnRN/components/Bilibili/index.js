import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";
import { StyleSheet, Text } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import {
  Home,
  History,
  Download,
} from './Stack'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0099FF'
  },
  headerText: {
    fontSize: 15,
  }
});

const App = StackNavigator({
  HomeStack: {
    screen: Home,
    navigationOptions: {
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

export default App;
