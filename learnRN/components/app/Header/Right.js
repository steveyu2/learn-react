import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Right extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Right</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  }
});