import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';

class History extends Component{

  render() {
    console.log(this.props)
    return (
      <Text onPress={()=>{
      }}>历史记录</Text>
    )
  }
}

export default History;