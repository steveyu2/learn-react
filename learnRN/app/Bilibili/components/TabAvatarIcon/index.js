import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, View } from 'react-native';
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
    } = this.props;

    return (
      <TouchableWithoutFeedback style={ btnStyle }>
        <Image style={ iconStyle } source={ icon }/>
        <Image style={ avatarStyle } source={ avatar }/>
      </TouchableWithoutFeedback>
    )
  }
}

TabNav.propsTypes = {
  icon: PropTypes.isRequired,
  avatar: PropTypes.isRequired,
};

export default TabAvatarIcon;