import React, { Component } from 'react';
import {ScrollView,SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import DrawerHeader from '../components/DrawerHeader';
import HeaderIcon from '../components/HeaderIcon';

class DrawerNavHeader extends Component{

  render() {

    return (
      <View style={ styles.wrap }>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content:{
    flex: 1,
    backgroundColor: "#000"
  }
})

export default DrawerNavHeader;