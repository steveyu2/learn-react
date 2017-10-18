import React, { Component } from 'react';
import {ScrollView,SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import DrawerHeader from '../components/DrawerHeader';
import HeaderIcon from '../components/HeaderIcon';
import { Images, Config } from "../config";

class DrawerNavHeader extends Component{

  render() {

    return (
      <View style={ styles.wrap }>
        <Image source={ Images.defaultAvatar } style={ styles.avatar }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: 150,
    backgroundColor: Config.mainColor,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  avatar: {
    height:60,
    width:60,
    borderRadius: 50
  }
})

export default DrawerNavHeader;