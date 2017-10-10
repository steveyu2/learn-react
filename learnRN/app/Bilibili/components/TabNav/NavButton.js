import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

/**
 * @props
 *  style {obj|style} 样式
 *  underlayColor {string} 点击时按压的颜色
 *  onPress {function} 点击事件
 *  images {reactElement} 按钮图片
 *  title 按钮标题
 *  title 标题样式
 */

class NavButton extends Component{
  render() {
    const {
      btnStyle,
      underlayColor,
      onPress,
      images,
      title,
      titleStyle,
    } = this.props;

    return (
      <TouchableHighlight
        style={ btnStyle }
        underlayColor={ underlayColor }
        onPress={ onPress }
      >
        <View style={ styles.wrap }>
          { images }
          <Text style={ titleStyle }>{ title }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default NavButton;