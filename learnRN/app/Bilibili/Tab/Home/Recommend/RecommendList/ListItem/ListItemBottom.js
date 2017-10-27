import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight, Dimensions, ImageBackground } from 'react-native';
import { Config,Images } from "../../../../../config/index";


class ListItemBottom extends PureComponent {

  render() {

    const {
      title,
      type
    } = this.props;

    return (
      <View style={ styles.item_bottom }>
        <Text style={ styles.title }>{ title }</Text>
        <Text style={ styles.type }>{ type }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item_bottom: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    // height: 50,
    // backgroundColor: '#fff'
  },
  title: {
    fontSize: 14,
    color: '#000',
  },
  type: {
    marginTop: 10,
    color: '#eee',
  }
});

export default ListItemBottom;