import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Config } from "../../config";
import Bangumi from "./Bangumi";
import Recommend from "./Recommend";

const MyAapp = TabNavigator({
  TabHomeRecommend: {
    screen: Recommend,
    // navigationOptions: {
    //   tabBarLabel: '推荐'
    // }
  },
  TabHomeBangumi: {
    screen: Bangumi,
    // navigationOptions: {
    //   tabBarLabel: '追番'
    // }
  },
},{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#DC143C',
    inactiveTintColor: '#E9967A',
  },
});

// , {
//   tabBarPosition: 'bottom',
//     animationEnabled: true,
//     tabBarOptions: {
//     activeTintColor: '#DC143C',
//       inactiveTintColor: '#E9967A',
//   },
// }
const MyApp = TabNavigator({
  Home: {
    screen: Recommend,
  },
  Notifications: {
    screen: Bangumi,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor }) => (
        <Image />
      ),
    }
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#DC143C',
    inactiveTintColor: '#E9967A',
  },
});
export default MyApp;