import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MinePage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>页面内容</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  }
});