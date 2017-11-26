import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Config, Images } from "../config";
// import { TabNavigator } from "react-navigation";
import TabNav from '../components/g/TabNav';
import HeaderIcon from '../components/HeaderIcon';
import Home from './Home';
import Dynamic from './Dynamic';
import Message from './Message';
import Zone from './Zone';

function rightIconBox(icons = []){
  return class extends Component{
    render(){
      return <View style={ {flexDirection: 'row',marginRight:5} }>
              { icons.map((V,i)=>{ return <V key={i} {...this.props}/> }) }
            </View>
    }
  }
}

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

const Tab = TabNav({
  HomeTab: {
    screen: Home,
    label: '首页',
    title: null,
    HeaderRight: rightIconBox([
      HeaderIcon('download', {
        onPress: ({screenProps})=>screenProps.navigation.navigate('DownloadStack')
      }),
      HeaderIcon('search', {
        onPress: ({screenProps})=>screenProps.navigation.navigate('SearchStack')
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
        onPress: ({screenProps})=>screenProps._navigation.navigate('SearchStack')
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
}, (props)=>{

  const mainColor = props.screenProps.mainColor;

  return { //
    underlayColor: Config.underlayColor,
    activeColor: mainColor,
    unActiveColor: Config.TabBottomUnActivefontColor,
    labelStyle: styles.label,
    HeaderLeft: HeaderIcon('drawerNavAvatar', {
        onPress: ({screenProps})=>{
          screenProps.navigation.navigate('DrawerOpen')
        }
    }),
    titleStyle: styles.title,
    headerStyle: [styles.header, {backgroundColor: mainColor}],
    bottomNavStyle: styles.tab,
    componentProps: {
      // 给左右组件和屏幕 传入父级传下来的props
      screenProps: {
        ...props.screenProps,
        navigation: props.navigation
      }
    }
  }
});

export default Tab;