import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/**
 * 头像组件
 * @props
 *  btnStyle 按钮样式
 *  icon 图标source
 *  icon 图标样式
 *  avatar 头像source
 *  avatarStyle 头像样式
 *  onPress 点击事件
 */

class TabAvatarIcon extends Component{

  static defaultProps = {
    btnStyle: {},
    iconStyle: {},
    avatarStyle: {},
  };

  render() {
    const {
      btnStyle,
      icon,
      iconStyle,
      avatar,
      avatarStyle,
      onPress,
    } = this.props;


    return (
      <TouchableWithoutFeedback
        style={ btnStyle }
        onPress={ ()=>{onPress(this.props)} }
      >
        <View style={ [styles.wrap] }>
          <Image style={ iconStyle } source={ icon }/>
          <Image style={ avatarStyle } source={ avatar }/>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

TabAvatarIcon.propsTypes = {
  icon: PropTypes.isRequired,
  avatar: PropTypes.isRequired,
  onPress: PropTypes.func
};

export default TabAvatarIcon;