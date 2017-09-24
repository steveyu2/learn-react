/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import MyHomeScreen from './components/MyHomeScreen'
import DrawerNavigator from './components/DrawerNavigator'
import MainScreenNavigator from './components/MainScreenNavigator'
import StackNavigator from './components/StackNavigator'
import Bilibili from './components/Bilibili'

export default class App extends Component {
  render() {
    return (
      <Bilibili />
  );
}
}

AppRegistry.registerComponent('learnRN', () => App);
