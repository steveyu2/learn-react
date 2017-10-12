import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


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
};

export default TabAvatarIcon;