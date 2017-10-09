import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Config, Images } from "../config";
import { TabNavigator } from "react-navigation";
import TabNav from '../components/TabNav';
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
    fontSize: 10,
    marginTop: -2,
  },
  tab: {
    height: 48,
  },
  header: {
    height:40
  }
});

const Tab = TabNav({
  HomeTab: {
    screen: Home,
    label: '首页',
    icon: ({ focused, tintColor }) => (
      <Image
        source={
          focused
            ?Images.homepage_fill
            :Images.homepage
        }
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  },
  ZoneTab: {
    screen: Zone,
    label: '分区',
    icon: ({ focused, tintColor }) => (
      <Image
        source={
          focused
            ?Images.classify
            :Images.classify
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
            ?Images.favor_fill
            :Images.favor
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
            ?Images.message
            :Images.message
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
  headerLeft: <Text>1</Text>,
  headerRight: <Text>2</Text>,
  headerStyle: styles.header,
  bottomNavStyle: styles.tab,
});

export default Tab;