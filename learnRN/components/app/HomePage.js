import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList, Button } from 'react-native';

export default class HomePage extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text style={styles.title}>首页内容</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  }
});