import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';


class TabNav extends Component{

  static defaultProps = {
    noAction: 'false'
  };

  render() {
    const {
      noAction
    } = this.props;
    // TouchableWithoutFeedback

    return (
      <TouchableHighlight
        style={ btnStyle }
        underlayColor={ underlayColor }
        onPress={ onPress }
      >
        <View style={ styles.wrap }>
          { images }
          <Text style={ titleStyle }>{ title }</Text>
        </View>
      </TouchableHighlight>);
  }
}

TabNav.propsTypes = {

};