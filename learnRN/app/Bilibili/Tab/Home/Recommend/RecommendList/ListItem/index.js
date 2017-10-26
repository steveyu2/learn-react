import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight, Dimensions, ImageBackground } from 'react-native';
import { Config,Images } from "../../../../../config/index";
import ListItemTop from "./ListItemTop";
import ListItemBottom from "./ListItemBottom";

class ListItem extends PureComponent {

  _onPress = () => {
    const {
      onPress,
      id
    } = this.props;
    onPress(id);
  }

  render() {

    const {
      data,
      itemStyle,
      itemWidth
    } = this.props;
    const itemHeight = 90 * (itemWidth/160)

    return (
      <TouchableHighlight
        style={ [styles.item, itemStyle] }
        underlayColor={ "#eee" }
        activeOpacity={ 0.8 }
        onPress={ this._onPress }

      >
        <View
          style={ styles.itemWrap }
        >
          <ListItemTop
            imageStyle={ styles.item_image }
            imageHeight={ itemHeight }
            play={data.play}
            danmu={data.danmu}
            source={{uri: data.imageUrl}}
          />
          <ListItemBottom

          />
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    overflow:'hidden',
    borderRadius: 10,
  },
  itemWrap: {
    // backgroundColor: 'transparent',
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#f6f6f6',
  },
  item_image: {
    //borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    //width: '100%',
  },
});

export default ListItem;