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
            videoTime={data.videoTime}
            source={{uri: data.imageUrl}}
          />
          <ListItemBottom
            title={ data.title }
            type={ data.type }
          />
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    //borderBottomRightRadius: 5,
    //shadowOffset: {width: 0, height: 0},
    //shadowColor: '#fff',
    //shadowOpacity: 1,
    //shadowRadius: 5
  },
  itemWrap: {
    borderWidth: 10,
    borderRadius: 3,
    borderColor: 'rgba(50,50,50,0.1)',
    backgroundColor: 'transparent',
    //borderBottomWidth: 2,
    //borderBottomColor: '#000',
    //borderLeftColor: '#eee',
    //borderRightColor: '#666',
    //borderLeftColor: '#000',
    //borderRightColor: 'red',
    borderTopWidth: 0,
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderBottomWidth: 2,
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#f6f6f6',
  },
  item_image: {
    //borderRadius: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    //width: '100%',
  },
});

export default ListItem;