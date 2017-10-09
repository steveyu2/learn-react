import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from "react-navigation";
import Home from './routes/Home'
import Dynamic from './routes/Dynamic'
import Message from './routes/Message'
import Zone from './routes/Zone'

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

const MyApp = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '首页',
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={ require("../../../../../../../../images/icon/favor/favor.png") }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Zone: {
    screen: Zone,
    navigationOptions: {
      title: '分区',
      tabBarLabel: '分区',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={ require("../../../../../../../../images/icon/favor/favor.png") }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Dynamic: {
    screen: Dynamic,
    navigationOptions: {
      title: '动态',
      tabBarLabel: '动态',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={ require("../../../../../../../../images/icon/favor/favor.png") }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Message: {
    screen: Message,
    navigationOptions: {
      title: '消息',
      tabBarLabel: '消息',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={ require("../../../../../../../../images/icon/favor/favor.png") }
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

export default MyApp;