import React, { Component } from 'react';
import { StackNavigator, Header } from 'react-navigation';
import { StyleSheet, Text, StatusBar } from 'react-native';
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
    navigationOptions: ({screenProps}) => ({
        headerStyle: [{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height:  Header.HEIGHT + StatusBar.currentHeight,
          paddingTop: StatusBar.currentHeight,
          shadowColor: 'transparent',
          backgroundColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        }]
    })
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
