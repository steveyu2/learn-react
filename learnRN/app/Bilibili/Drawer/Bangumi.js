import React, { Component } from 'react';
import {ScrollView,SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import DrawerHeader from '../components/DrawerHeader';
import HeaderIcon from '../components/HeaderIcon';

class Bangumi extends Component{

  render() {

    return (
      <View style={ styles.wrap }>
        <DrawerHeader
          title="历史"
          navigation={ this.props.navigation }
        />
        <ScrollView >
          <View style={ styles.content }>

          </View>
          <Text>asd</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content:{
    flex: 1,
    backgroundColor: "#000"
  }
})
export default Bangumi;