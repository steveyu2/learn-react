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

const Tab = TabNavigator({
  HomeTab: {
    screen: Home,
    navigationOptions: {
      title: '首页',
      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?require("../../../images/icon/favor/favor_fill.png")
              :require("../../../images/icon/favor/favor.png")
          }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  ZoneTab: {
    screen: Zone,
    navigationOptions: {
      title: '分区',
      tabBarLabel: '分区',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?require("../../../images/icon/favor/favor_fill.png")
              :require("../../../images/icon/favor/favor.png")
          }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  DynamicTab: {
    screen: Dynamic,
    navigationOptions: {
      title: '动态',
      tabBarLabel: '动态',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?require("../../../images/icon/favor/favor_fill.png")
              :require("../../../images/icon/favor/favor.png")
          }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  MessageTab: {
    screen: Message,
    navigationOptions: {
      title: '消息',
      tabBarLabel: '消息',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={
            focused
              ?require("../../../images/icon/favor/favor_fill.png")
              :require("../../../images/icon/favor/favor.png")
          }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
}, {
  tabBarPosition: 'bottom',
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

export default TabNav;