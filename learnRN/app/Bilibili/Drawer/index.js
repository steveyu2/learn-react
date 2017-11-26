import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Config,Images } from "../config";
import Tab from '../Tab';
import Collection from './Collection';
import Theme from './Theme';
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
  ThemeDrawer: {
    screen: Theme,
    navigationOptions: {
      drawerLabel: '主题',
      title: '主题',
      drawerIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?Images.windmill_fill
              :Images.windmill
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
    'ThemeDrawer',
    'HistoryDrawer',
    'DownloadDrawer'
  ],
  contentComponent: props => {
    const mainColor = props.screenProps.mainColor;

    return (
      <ScrollView
        style={ styles.drawer }
        >
        <DrawerNavHeader
          //这里路由是DrawerClose没有参数，我直接懵逼，然后看了下结构，就顺着来了。。
          mainColor={ mainColor } />
        <DrawerItems
          {...props}
          onItemPress={
            ({route}) => isStackRoute(route, (routeName) => {
              const navigation = props.navigation;
              navigation.navigate('DrawerClose')
              //alert(JSON.stringify(navigation.state.params))
              setTimeout(() => navigation.navigate(routeName), 0);
            })
          }
          labelStyle={ styles.label }
          activeTintColor={ mainColor }
          activeBackgroundColor={ Config.drawerUnderlayColor }
        />
      </ScrollView>
  )},
  navigationOptions: ({navigation}) => ({
    title:'标题',
    //headerStyle:{ backgroundColor: navigation.state.params.mainColor }, // 头部样式
  }),
  drawerWidth: Config.drawerWidth, // 侧拉的宽度
});

export default Drawer;
