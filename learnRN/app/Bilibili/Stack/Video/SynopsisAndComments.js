// 简介和评论
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from 'react-native';
// import FadeInView from '../../components/g/FadeInView';
import { Config } from "../../config";
import NestedScrollView from 'react-native-nested-scroll-view';

class SynopsisAndComments extends Component{
  render() {
    return (
      <View style={ styles.wrap }>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Config.TabNavScreenColor,
    flex: 1,
  }
});

export default SynopsisAndComments;