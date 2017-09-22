import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderLeft from './Left';
import HeaderRight from './Right';

class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>头部</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  }
});

export {
  Header,
  HeaderLeft,
  HeaderRight,
}