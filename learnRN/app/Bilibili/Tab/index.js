import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from "react-navigation";
import TabNav from '../components/TabNav';
import Home from './Home';
import Dynamic from './Dynamic';
import Message from './Message';
import Zone from './Zone';

const styles = StyleSheet.create({
  icon: {
    marginTop: -6,
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 10,
    marginTop: -4,
  },
  tab: {
    height: 48,
  },
});

const Tab = TabNav({
  HomeTab: {
    screen: Home,
    label: '首页',
    icon: ({ focused, tintColor }) => (
      <Image
        source={
          focused
            ?require("../../../images/icon/favor/favor_fill.png")
            :require("../../../images/icon/favor/favor.png")
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
            ?require("../../../images/icon/favor/favor_fill.png")
            :require("../../../images/icon/favor/favor.png")
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
            ?require("../../../images/icon/favor/favor_fill.png")
            :require("../../../images/icon/favor/favor.png")
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
            ?require("../../../images/icon/favor/favor_fill.png")
            :require("../../../images/icon/favor/favor.png")
        }
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    pressColor: '#aaa',
    showIcon: true,
    labelStyle: styles.label,
    tabStyle: {},
    indicatorStyle: {display: 'none'},
    style: styles.tab
  },
});

export default Tab;