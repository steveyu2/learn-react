import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { Config, Images } from "../../../../../config/index";
import SimplePropTypes from "../../../../../components/g/simple-prop-types"
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
    const itemHeight = itemWidth * (80/160)  // 80/160 图片比例

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
  /*item: {
    //borderBottomRightRadius: 5,
    //shadowOffset: {width: 0, height: 0},
    //shadowColor: '#fff',
    //shadowOpacity: 1,
    //shadowRadius: 5
  },*/
  itemWrap: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgba(50,50,50,0.1)',
    backgroundColor: 'transparent',
    //borderBottomWidth: 2,
    //borderBottomColor: '#000',
    //borderLeftColor: '#eee',
    //borderRightColor: '#666',
    //borderLeftColor: '#000',
    //borderRightColor: 'red',
    overflow: 'hidden',
    borderTopWidth: 0,
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderBottomWidth: 2,
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#f6f6f6',
  },
  item_image: {
    //width: '100%',
    //borderRadius: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

ListItem.propTypes = SimplePropTypes(({ strRq, shapeRq, funcRq })=>({
  data: shapeRq({
    title: strRq,
    //videoUrl: strRq,
    imageUrl: strRq,
    videoTime: strRq,
    play: strRq,
    danmu: strRq,
    type: strRq,
  }),
  id: strRq,
  onPress: funcRq
}))

export default ListItem;