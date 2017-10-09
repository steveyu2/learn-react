import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

class NavHeader extends Component{
  render() {
    const {
      style,
      headerLeft,
      title,
      headerRight,
    } = this.props;

    return (
      <View style={ [style ,styles.header] }>
        <View style={ styles.header }>
          { !!headerLeft && headerLeft }
        </View>
        <View>
          <Text>{ !!title && title }</Text>
        </View>
        <View>
          { !!headerRight && headerRight }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#aaa',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
// console.log('styles',styles ,StyleSheet)

export default NavHeader;