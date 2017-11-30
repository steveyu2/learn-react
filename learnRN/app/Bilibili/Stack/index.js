import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text } from 'react-native';
import { Config } from '../config';
import Drawer from '../Drawer';
import History from './History';
import Download from './Download';
import Search from './Search';
import Video from './Video';
import SpecialColumn from './SpecialColumn';

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
      header: null,
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
  },
  SearchStack: {
    screen: Search,
    navigationOptions: {
      title: '搜索'
    }
  },
  VideoStack: {
    screen: Video,
    navigationOptions: {
      header: null
    }
  },
  SpecialColumnStack: {
    screen: SpecialColumn,
    navigationOptions:  ({screenProps}) => ({
      title: '专栏',
      headerStyle: [ styles.header,{elevation:0, backgroundColor: screenProps.mainColor} ]
    })
  },
  //----------------------------------------------
  PlaceholderStack: {
    screen: class extends Component{ render = () => <Text>空页面</Text>; },
    navigationOptions: {
      title: '空页面'
    }
  }
},{
  initialRouteName: 'HomeStack', // 默认屏幕
  //initialRouteParams: { mainColor: '#f87197' },
  headerMode: 'screen',
  navigationOptions: ({screenProps}) => {
    //alert(navigation.state.params.mainColor)
    return {
      headerStyle: [ styles.header, {backgroundColor: screenProps.mainColor} ], // 头部样式
      headerTintColor: '#fff', // 标题及返回按钮的颜色
      headerTitleStyle: styles.headerText, // 标题样式
    }
  }
});

export default Stack;
