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
import MyHomeScreen from './app/MyHomeScreen';
import DrawerNavigator from './app/DrawerNavigator';
import MainScreenNavigator from './app/MainScreenNavigator';
import StackNavigator from './app/StackNavigator';
import Bilibili from './app/Bilibili';

export default class App extends Component {
  render() {
    return (
      <Bilibili />
  );
}
}

AppRegistry.registerComponent('learnRN', () => App);
