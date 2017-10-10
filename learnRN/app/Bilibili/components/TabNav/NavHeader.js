import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class NavHeader extends Component{
  render() {
    const {
      headerStyle,
      headerLeft,
      title,
      titleStyle,
      headerRight,
    } = this.props;

    return (
      <View style={[
        styles.header,
        headerStyle,
      ]}>
        <View style={[
          styles.headerChild,
          styles.headerLeft,
        ]}>
          { !!headerLeft && headerLeft }
        </View>
        <View style={[
          styles.headerChild,
          styles.headerCenter,
        ]}>
          <Text style={ [styles.title, titleStyle] }>{ !!title && title }</Text>
        </View>
        <View style={[
          styles.headerChild,
          styles.headerRight,
        ]}>
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
  headerChild:{
    flex:1,
    flexDirection: 'row',
  },
  headerLeft: {
    justifyContent: 'flex-start',
  },
  headerCenter: {
    justifyContent: 'center',
  },
  headerRight: {
    justifyContent: 'flex-end',
  },
});
// console.log('styles',styles ,StyleSheet)

export default NavHeader;