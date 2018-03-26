/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Bilibili from './app/Bilibili';

export default class App extends Component<{}> {
  render = () => <Bilibili />;

  //render = () => (
  //    <FlatList
  //        data={[
  //            {key: '简介'},
  //            {key: 'Jackson'},
  //            {key: 'James'},
  //            {key: 'Joel'},
  //            {key: 'John'},
  //            {key: 'Jillian'},
  //            {key: 'Jimmy'},
  //            {key: 'John'},
  //            {key: 'John'},
  //            {key: 'Jillian'},
  //            {key: 'Jimmy'},
  //            {key: 'Julie'},
  //            {key: 'Julie'},
  //            {key: 'Jillian'},
  //            {key: 'Jimmy'},
  //            {key: 'Julie'},
  //            {key: 'Julie'},
  //          ]}
  //        style={{
  //          height: 200,}}
  //        renderItem={({item}) =>  <Text style={{fontSize: 40}}>{item.key}</Text>}
  //    />
  //)
}