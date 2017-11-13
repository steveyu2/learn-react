import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Config, Images } from '../config/index';
import TabAvatarIcon from './g/TabAvatarIcon/index';
import IconButton from './g/IconButton/index';

export default (iconName, props)=>{
  var CurrentComponent;
  var globalProps = {};

  switch(iconName){
    case 'drawerNavAvatar':
      CurrentComponent = TabAvatarIcon;
      globalProps = {
        icon: Images.menu,
        iconStyle: styles.avatarIcon,
        btnStyle: styles.button,
        avatar: Images.defaultAvatar,
        avatarStyle: styles.avatar,
      };
      break;
    case 'download':
      CurrentComponent = IconButton;
      globalProps = {
        icon: Images.download,
        underlayColor: Config.headerIconUnderlayColor,
        nativeUnderlayColor: Config.drawerNativeUnderlayColor,
        iconStyle: [styles.icon,],
        wrapperStyle: styles.button
      };
      break
    case 'search':
      CurrentComponent = IconButton;
      globalProps = {
        icon: Images.search,
        underlayColor: Config.headerIconUnderlayColor,
        nativeUnderlayColor: Config.drawerNativeUnderlayColor,
        iconStyle: [styles.icon],
        wrapperStyle: styles.button
      };
      break;
    case 'menu':
      CurrentComponent = IconButton;
      globalProps = {
        noAction: true,
        underlayColor: Config.headerIconUnderlayColor,
        nativeUnderlayColor: Config.drawerNativeUnderlayColor,
        icon: Images.menu,
        iconStyle: [styles.icon, styles.menu],
        btnStyle: styles.menuBtn
      };
      break;
    default:
      throw new Error('iconName error');
  }
  return class extends Component{
    render() {
      return (
        <CurrentComponent
          {...globalProps}
          {...props}
          {...this.props}
        />
      );
    }
  }
};


const styles = StyleSheet.create({
  avatarIcon: {
    height: 23,
    width: 9,
    tintColor: Config.iconColor,
    marginLeft: 8
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 50
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: Config.iconColor,
  },
  button: {
    marginRight: 2,
    height:40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBtn: {
    height:40,
    width: 40,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    height: 14,
    width: 22,
  }
});
