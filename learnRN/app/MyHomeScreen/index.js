import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from "react-navigation";

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../images/icon/favor/favor.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
});

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../images/icon/favor/favor.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
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