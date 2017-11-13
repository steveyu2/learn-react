import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Config, Images } from "../config";
import { TabNavigator } from "react-navigation";
import TabNav from '../components/g/TabNav';
import HeaderIcon from '../components/HeaderIcon';
import Home from './Home';
import Dynamic from './Dynamic';
import Message from './Message';
import Zone from './Zone';

const styles = StyleSheet.create({
  icon: {
    marginTop: 5,
    width: 24,
    height: 24,
  },
  label: {
    fontSize: Config.bottomNavLabelSize,
    marginTop: -2,
    color: Config.TabUnActivefontColor,
  },
  tab: {
    backgroundColor: Config.TabNavTabColor,
    height: Config.footerHeight,
  },
  title: {
    fontSize: Config.headerTitleSize,
    color: '#fff',
  },
  header: {
    height: Config.headerHeight,
    backgroundColor: Config.mainColor,
  },
});

function rightIconBox(icons = []){
  return class extends Component{
    render(){
      return <View style={ {flexDirection: 'row',marginRight:5} }>
              { icons.map((V,i)=>{ return <V key={i} {...this.props}/> }) }
            </View>
    }
  }
}

const Tab = TabNav({
  HomeTab: {
    screen: Home,
    label: '首页',
    title: null,
    HeaderRight: rightIconBox([
      HeaderIcon('download', {
        onPress: (props)=>props._navigation.navigate('DownloadStack')
      }),
      HeaderIcon('search', {
        onPress: (props)=>props._navigation.navigate('SearchStack')
      }),
    ]),
    icon: ({ focused, tintColor }) => (
      <Image
        source={
          focused
            ?Images.homepage_fill
            :Images.homepage
        }
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  },
  ZoneTab: {
    screen: Zone,
    label: '分区',
    HeaderRight: rightIconBox([
      HeaderIcon('search', {
        onPress: (props)=>props._navigation.navigate('SearchStack')
      }),
    ]),
    icon: ({ focused, tintColor }) => (
      <Image
        source={
          focused
            ?Images.manage_fill
            :Images.manage
        }
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  },
  DynamicTab: {
    screen: Dynamic,
    label: '动态',
    icon: ({ focused, tintColor }) => (
      <Image
        source={
          focused
            ?Images.collection_fill
            :Images.collection
        }
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  },
  MessageTab: {
    screen: Message,
    label: '消息',
    icon: ({ focused, tintColor }) => (
      <Image
        source={
          focused
            ?Images.interactive_fill
            :Images.interactive
        }
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  },
}, {
  underlayColor: Config.underlayColor,
  activeColor: Config.mainColor,
  unActiveColor: Config.TabBottomUnActivefontColor,
  labelStyle: styles.label,
  HeaderLeft: HeaderIcon('drawerNavAvatar', {
    onPress: (props) => {
      props._navigation.navigate('DrawerOpen')
    }
  }),
  titleStyle: styles.title,
  headerStyle: styles.header,
  bottomNavStyle: styles.tab,
  componentProps: (props) => ({
    // 给左右组件和屏幕 传入父级传下来的props
    _navigation: props.navigation,
    screenProps: props.screenProps,
  })
});

export default Tab;