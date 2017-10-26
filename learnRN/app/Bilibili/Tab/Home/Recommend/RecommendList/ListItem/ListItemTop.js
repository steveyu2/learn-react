import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight, Dimensions, ImageBackground } from 'react-native';
import { Config,Images } from "../../../../../config";


class ListItemTop extends PureComponent {

  render() {

    const {
      imageStyle,
      source,
      play,
      danmu,
      imageHeight,
    } = this.props;

    // cover contain stretch repeat center
    return (
      <View style={ styles.wrap }>
        {/*本来想用ImageBackGround的设置了圆角没反应就不用了*/}
        <Image
          source={ source }
          style={ [imageStyle, { height: imageHeight + infoHeight }] }
          resizeMode='cover' >
        </Image>
        <View style={[ styles.info, {top: imageHeight} ]}>
          <Text style={ styles.info_text }>{ play }</Text>
          <Text style={ styles.info_text }>{ danmu }</Text>
        </View>
      </View>
    )
  }
}

const infoHeight = 23;
const styles = StyleSheet.create({
  wrap: {
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    //flex: 0.5,
    width: '100%',
    height: infoHeight,
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    //top: 20
  },
  info_text: {
    color: '#fff',
    fontSize: 12,
  }
});

export default ListItemTop;