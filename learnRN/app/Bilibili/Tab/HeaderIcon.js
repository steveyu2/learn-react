import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Config, Images } from '../config';
import TabAvatarIcon from '../components/TabAvatarIcon';
import IconButton from '../components/IconButton';

export default (iconName, props, onPress)=>{

  switch(iconName){
    case 'avatar':
      return <TabAvatarIcon
        icon={ Images.menu }
        iconStyle={}
        btnStyle={}
        avatar={}
        avatarStyle={}
      />
    case 'download':

      return
    default:
      throw new Error('iconName error');
  }

};