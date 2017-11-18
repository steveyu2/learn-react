import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Config,Images } from "../config";
import Tab from '../Tab';
import Collection from './Collection';
import DrawerNavHeader from './DrawerNavHeader';

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
  drawer: {
    marginBottom: 30
  },
  label: {
    fontSize: Config.drawerFontSize,
    marginLeft: 8,
  }
});
/**
 * 给跳转stack的路由。占位置的组件
 */
class UselessRoute extends Component{
  render(){
    return <View><Text>UselessRoute</Text></View>
  }
}
/**
 * 判断是否需要跳转到Stack的路由   p: 考虑到有些是要跳弹出页(Stack)的路由
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

const Drawer = DrawerNavigator({
  HomeDrawer: {
    screen: Tab,
    navigationOptions: {
      drawerLabel: '首页',
      drawerIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?Images.homepage_fill
              :Images.homepage
          }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  CollectionDrawer: {
    screen: Collection,
    navigationOptions: {
      drawerLabel: '收藏',
      title: '收藏',
      drawerIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?Images.collection_fill
              :Images.collection
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
              ?Images.manage_fill
              :Images.manage
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
              ?Images.download
              :Images.download
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
    'CollectionDrawer',
    'HistoryDrawer',
    'DownloadDrawer'
  ],
  contentComponent: props => (
    <ScrollView
      style={styles.drawer}
      >
      <DrawerNavHeader />
      <DrawerItems
        {...props}
        onItemPress={
          ({route}) => isStackRoute(route, (routeName) => {
            console.log(props, '123')
            props.navigation.navigate('DrawerClose');
            setTimeout(() => props.navigation.navigate(routeName), 0);
          })
        }
        labelStyle={ styles.label }
        activeTintColor={ Config.mainColor }
        activeBackgroundColor={ Config.drawerUnderlayColor }
      />
    </ScrollView>
  ),
  navigationOptions: {
    title:'标题'
  },
  drawerWidth: Config.drawerWidth, // 侧拉的宽度
});

export default Drawer;
