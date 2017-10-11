import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Config, Images } from "../config";
import { TabNavigator } from "react-navigation";
import TabNav from '../components/TabNav';
import HeaderIcon from './HeaderIcon';
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
  },
  tab: {
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
  unActiveColor: Config.unActiveColor,
  labelStyle: styles.label,
  HeaderLeft: HeaderIcon('avatar',{
    onPress: (props)=>{
      props.navigation.navigate('DrawerOpen')
    }
  }),
  titleStyle: styles.title,
  HeaderRight: class extends Component{render(){return <Text>2</Text>}},
  headerStyle: styles.header,
  bottomNavStyle: styles.tab,
});

export default Tab;