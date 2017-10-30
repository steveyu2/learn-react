import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../components/g/FadeInView';
import { Config, Images } from "../config";

class Zone extends Component{

  render() {
    return (
      <FadeInView style={ styles.wrap }>
        <Text>分区</Text>
      </FadeInView>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Config.TabNavScreenColor
  }
});

export default Zone;