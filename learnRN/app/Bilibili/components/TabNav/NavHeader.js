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
          <Text style={ styles.title }>{ !!title && title }</Text>
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
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: "#000"
  },
});
// console.log('styles',styles ,StyleSheet)

export default NavHeader;