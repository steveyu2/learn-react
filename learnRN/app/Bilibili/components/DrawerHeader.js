import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Config, Images } from '../config/index';
import NormalHeader from './g/NormalHeader/index';
import HeaderIcon from './HeaderIcon';
import from
colors

class DrawerHeader extends Component{

  render() {
    const {
      title,
      navigation,
    } = this.props;

    return (
      <NormalHeader
        title={ title }
        titleStyle={ styles.title }
        headerStyle={ styles.header }
        align="left"
        HeaderLeft={
          HeaderIcon('menu',{
              onPress: (props)=>{
                navigation.navigate('DrawerOpen')
              }
            }
          )
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: Config.headerHeight,
    backgroundColor: Config.mainColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: Config.headerTitleSize,
    marginLeft: 15,
  }
});

export default DrawerHeader;