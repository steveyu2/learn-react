import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight, Dimensions, ImageBackground } from 'react-native';
import { Config,Images } from "../../../../../config/index";


class ListItemBottom extends PureComponent {

  render() {

    return (
      <View style={ styles.item_bottom }>
        <Text>123</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item_bottom: {
    flex: 0.5,
    height: 50,
    // backgroundColor: '#fff'
  }
});

export default ListItemBottom;