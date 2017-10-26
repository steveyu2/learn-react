import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight, Dimensions, ImageBackground } from 'react-native';
import { Config,Images } from "../../../../../config/index";


class ListItemTop extends PureComponent {

  render() {

    const {
      imageStyle,
      source,
    } = this.props;

    // cover contain stretch repeat center
    return (
      <View>
        {/*本来想用ImageBackGround的设置了圆角没反应就不用了*/}
        <Image
          source={ source }
          style={ imageStyle }
          resizeMode='cover' >
        </Image>
        <View>
          <Text>123</Text>
        </View>
      </View>
    )
  }
}

export default ListItemTop;