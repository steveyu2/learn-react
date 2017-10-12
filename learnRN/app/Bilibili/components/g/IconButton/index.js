import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * @props
 *  noAction {boolean} 是否点击无回馈 默认false
 *  btnStyle {obj|StyleSheet} 按钮样式
 *  icon {image} 图片
 *  iconStyle {obj|StyleSheet} 按钮样式
 *  onPress {function} 按钮事件
 */

class IconButton extends Component{

  static defaultProps = {
    noAction: false,
    btnStyle: {},
    iconStyle: {},
    underlayColor: '#eee',
    onPress: ()=>{},
  };

  render() {
    const {
      noAction,
      btnStyle,
      icon,
      iconStyle,
      underlayColor,
      onPress,
    } = this.props;

    return (
        <TouchableHighlight
          style={ btnStyle }
          underlayColor={ !noAction? underlayColor : null }
          activeOpacity={ null }
          onPress={ ()=>onPress(this.props) }
        >
          <Image source={ icon } style={ iconStyle } />
        </TouchableHighlight>
    )
  }
}

IconButton.propsTypes = {
  noAction: PropTypes.string,
  icon: PropTypes.isRequired,
};

export default IconButton;