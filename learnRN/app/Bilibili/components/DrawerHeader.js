import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Config, Images } from '../config/index';
import NormalHeader from './g/NormalHeader/index';
import HeaderIcon from './HeaderIcon';


class DrawerHeader extends Component{

  render() {
    const {
      title
    } = this.props;

    return (
      <NormalHeader
        title={ title }
        titleStyle={ styles.title }
        align="left"
        LeftComponent={
          HeaderIcon
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
    marginLeft: 20,
  }
});

export default DrawerHeader;