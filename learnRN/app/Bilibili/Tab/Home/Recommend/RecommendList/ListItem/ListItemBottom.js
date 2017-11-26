import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { Config, Images } from "../../../../../config/index";
import SimplePropTypes from "../../../../../components/g/simple-prop-types"

class ListItemBottom extends PureComponent {

  render() {

    const {
      title,
      type
    } = this.props;

    return (
      <View style={ styles.item_bottom }>
        <Text
          style={ styles.title }
          numberOfLines={2}
        >{ title }</Text>
        <Text style={ styles.type }>{ type }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item_bottom: {
    paddingHorizontal: Config.TabNavScreenPadding,
    paddingVertical: Config.TabNavScreenPadding * 0.9,
    justifyContent: 'space-between',
    height: 78,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  title: {
    fontSize: 13.5,
    color: '#000',
  },
  type: {
    fontSize: 13,
    color: 'rgba(0,0,0, 0.5)',
  }
});

ListItemBottom.propTypes = SimplePropTypes(({ strRq, anyRq })=>({
  title: anyRq,
  type: strRq
}))

export default ListItemBottom;