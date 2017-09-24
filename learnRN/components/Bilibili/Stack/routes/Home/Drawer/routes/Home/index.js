import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from "react-navigation";
import {
  Home,
  Dynamic,
  Message,
  Zone,
} from "./Tab";
import { ICON } from './../../../../../../../../images';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: '首页',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={ ICON.home2 }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Home2: {
    screen: Home,
    navigationOptions: {
      drawerLabel: '首页',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={ ICON.home2 }
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MyApp;