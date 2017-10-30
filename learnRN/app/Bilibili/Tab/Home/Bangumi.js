import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../../components/g/FadeInView';
import { Config,Images } from "../../config";

class Bangumi extends Component {

  render() {
    return (
      <FadeInView style={ styles.wrap }>
        <Text>Bangumi{}</Text>
      </FadeInView>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Config.TabNavScreenColor
  }
});

export default Bangumi;