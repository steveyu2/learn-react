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
  header: {
    backgroundColor: '#fff',
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
  underlayColor: '#eaeaea',
  activeColor: 'blue',
  headerLeft: <Text>1</Text>,
  headerRight: <Text>2</Text>,
  unActiveColor: '#aaa',
  headerStyle: styles.header
});

export default Tab;