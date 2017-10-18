import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';

class History extends Component{

  render() {
    console.log(this.props)
    return (
      <Text onPress={()=>{
        this.props.screenProps.setAppState('setMainColor', ['sad'])
      }}>历史记录{this.props.screenProps.getAppState('mainColor')}</Text>
    )
  }
}

export default History;