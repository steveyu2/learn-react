import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { config, images } from "../config";
import { TabNavigator } from "react-navigation";
import TabNav from '../components/TabNav';
import Home from './Home';
import Dynamic from './Dynamic';
import Message from './Message';
import Zone from './Zone';

const styles = StyleSheet.create({
  icon: {
    marginTop: 0,
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 10,
    marginTop: 0,
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
            ?images.home_fill
            :images.home
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
            ?images.classify
            :images.classify
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
            ?images.favor_fill
            :images.favor
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
            ?images.message
            :images.message
        }
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  },
}, {
  underlayColor: config.underlayColor,
  activeColor: config.mainColor,
  unActiveColor: config.unActiveColor,
  titleStyle: styles.label,
  headerLeft: <Text>1</Text>,
  headerRight: <Text>2</Text>,
  headerStyle: styles.header
});

export default Tab;