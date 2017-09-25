import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, Button, Image } from 'react-native';

class TabNav extends Component{

  render(){
    const tintColor = 'yellow';
    const nav = [
      {
        label: '首页',
        icon: ({ focused, tintColor }) => (
          <Image
            source={
              focused
                ?require("../../../images/icon/favor/favor_fill.png")
                :require("../../../images/icon/favor/favor.png")
            }
            style={[styles.icon, {tintColor: tintColor}]}
          />
        )
      },
      {
        label: '也面',
        icon: ({ focused, tintColor }) => (
          <Image
            source={
              focused
                ?require("../../../images/icon/favor/favor_fill.png")
                :require("../../../images/icon/favor/favor.png")
            }
            style={[styles.icon, {tintColor: tintColor}]}
          />
        )
      },
      {
        label: '首页',
        icon: ({ focused, tintColor }) => (
          <Image
            source={
              focused
                ?require("../../../images/icon/favor/favor_fill.png")
                :require("../../../images/icon/favor/favor.png")
            }
            style={[styles.icon, {tintColor: tintColor}]}
          />
        )
      },
      {
        label: '也面',
        icon: ({ focused, tintColor }) => (
          <Image
            source={
              focused
                ?require("../../../images/icon/favor/favor_fill.png")
                :require("../../../images/icon/favor/favor.png")
            }
            style={[styles.icon, {tintColor: tintColor}]}
          />
        )
      },
    ];
    return (
      <View style={ styles.wrap }>
        <View style={ styles.header }>

        </View>
        <ScrollView style={ styles.content }>

        </ScrollView>
        <View style={ [styles.bottom, { backgroundColor: '#ccc' }] }>
          {
            nav.map((v) => {

            })
          }
        </View>
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
  header: {
    height: 60,
    backgroundColor: '#aaa'
  },
  content: {
    height: 100,
    backgroundColor: '#fff',
  },
  bottom: {
    height: 60,
    backgroundColor: '#012',
  },
  // qwe: {
  //   height: 100,
  //   backgroundColor: 'red',
  // },
  // qwe2: {
  //   height: 100,
  //   backgroundColor: 'yellow',
  // }
});

export default TabNav;
/*

<Text>1</Text>
<View style={ styles.qwe }></View>
<View style={ styles.qwe2 }></View>
<View style={ styles.qwe }></View>
<View style={ styles.qwe2 }></View>
<View style={ styles.qwe }></View>
<View style={ styles.qwe2 }></View>
<View style={ styles.qwe2 }></View>
<View style={ styles.qwe }></View>
<View style={ styles.qwe2 }></View>
<View style={ styles.qwe2 }></View>
<View style={ styles.qwe }></View>
<View style={ styles.qwe2 }></View>
<Text>2</Text>*/
