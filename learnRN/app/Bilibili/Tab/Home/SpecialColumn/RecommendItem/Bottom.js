import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, Dimensions, TouchableHighlight } from 'react-native';
import IconButton from '../../../../components/g/IconButton';
import { Config, Images } from "../../../../config";

class Bottom extends Component {

  static defaultProps = {
  };

  render() {
    return (
      <View style={styles.wrapper}>

      </View>
    )
  }
}

const mediaWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {

  }
});

export default Bottom;