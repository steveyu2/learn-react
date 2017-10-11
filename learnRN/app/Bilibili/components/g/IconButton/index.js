import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';


class TabNav extends Component{

  static defaultProps = {
    noAction: 'false',
    iconStyle: {},
  };

  render() {
    const {
      noAction,
      icon,
      iconStyle,
      onPress,
    } = this.props;
    // TouchableWithoutFeedback

    return (
      !noAction?
        <TouchableHighlight
          style={ btnStyle }
          underlayColor={ underlayColor }
          onPress={ ()=>{onPress(this.props)} }
        >
          <Image source={ icon } style={ iconStyle } />
        </TouchableHighlight>
        :
        <TouchableWithoutFeedback style={ btnStyle }>
          <Image source={ icon } style={ iconStyle } />
        </TouchableWithoutFeedback>
    )
  }
}

TabNav.propsTypes = {
  noAction: PropTypes.string,
  icon: PropTypes.isRequired,
};