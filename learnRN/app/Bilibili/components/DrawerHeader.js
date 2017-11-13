import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Config, Images } from '../config/index';
import NormalHeader from './g/NormalHeader/index';
import HeaderIcon from './HeaderIcon';

/**
 * 抽屉路由导航
 * title 标题
 * navigation 路由导航
 */

class DrawerHeader extends Component{

  render() {
    const {
      title,
      navigation,
    } = this.props;

    const HeaderLeft = HeaderIcon('menu',{
        onPress: (props)=>{
          navigation.navigate('DrawerOpen')
        }
      }
    )

    return (
      <NormalHeader
        title={ title }
        titleStyle={ styles.title }
        headerStyle={ styles.header }
        align="left"
        HeaderLeft={ <HeaderLeft  /> }
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
    marginLeft: 5,
  }
});

DrawerHeader.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.objectOf(PropTypes.shape({
    navigate: PropTypes.func,
  })
};

export default DrawerHeader;