import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Left extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Left</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  }
});