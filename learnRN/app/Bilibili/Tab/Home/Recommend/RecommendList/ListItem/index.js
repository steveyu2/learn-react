import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight, Dimensions, ImageBackground } from 'react-native';
import { Config,Images } from "../../../../../config/index";
import ListItemTop from "./ListItemTop";
import ListItemBottom from "./ListItemBottom";

class ListItem extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      imageHeight: 0
    };
  }

  _onPress = () => {
    const {
      onPress,
      id
    } = this.props;
    onPress(id);
  }

  // 获取外部item的width 设置图片height
  _onLayout (e){
    this.setState({
      imageHeight: 90 * (e.layout.width/160)
    })
  }

  render() {

    const {
      data,
      itemStyle
    } = this.props;

    return (
      <TouchableHighlight
        style={ [styles.item, itemStyle] }
        underlayColor={ "#ddd" }
        activeOpacity={ 0.8 }
        onPress={ this._onPress }

      >
        <View
          style={ styles.itemWrap }
          onLayout={({nativeEvent:e})=>this._onLayout(e)}
        >
          <ListItemTop
            imageStyle={[styles.item_image, {height: this.state.imageHeight}]}
            source={{uri: data.imageUrl}}
          />
          <ListItemBottom />
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
    borderRadius: 10,
  },
});

export default ListItem;