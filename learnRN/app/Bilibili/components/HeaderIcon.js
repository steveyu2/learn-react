import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Config, Images } from '../config/index';
import TabAvatarIcon from './g/TabAvatarIcon/index';
import IconButton from './g/IconButton/index';

export default (iconName, props)=>{

  switch(iconName){
    case 'avatar':
      return class extends Component{
        render() {
          return (<TabAvatarIcon
            icon={ Images.menu }
            iconStyle={ styles.icon }
            btnStyle={ styles.button }
            avatar={ Images.defaultAvatar }
            avatarStyle={ styles.avatar }
            {...this.props}
            {...props}
          />);
        }
      }
    case 'download':

      return
    case 'menu':

      return
    default:
      throw new Error('iconName error');
  }
};


const styles = StyleSheet.create({
  icon: {
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
  button: {
  }
});
