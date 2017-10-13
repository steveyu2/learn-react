import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../components/g/FadeInView';

class Dynamic extends Component{

  render() {
    return (
      <FadeInView style={ styles.wrap }>
        <Text>动态</Text>
      </FadeInView>
    );
  }
}


const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#000'
  }
});

export default Dynamic;