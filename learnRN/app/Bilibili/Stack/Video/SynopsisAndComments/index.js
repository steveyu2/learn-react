// 简介和评论
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import { Config, Images } from "../../../config/index";

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Config.TabNavScreenColor,
    flex: 1,
  }
});

class SynopsisAndComments extends Component{
  render() {
    const {
      mainColor
    } = this.props;

    return (
      <View style={ styles.wrap }>
        <View style={{height: 1000,width: 20,backgroundColor: 'gray'}}/>
      </View>
    )
  }
}

export default SynopsisAndComments;