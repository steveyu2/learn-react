import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

class NavButton extends Component{
  render() {
    const {
      style,
      underlayColor,
      onPress,
      images,
      title,
      titleStyle,
    } = this.props;

    return (
      <TouchableHighlight
        style={ style }
        underlayColor={ underlayColor }
        onPress={ onPress }
      >
        <View style={ styles.wrap }>
          { images }
          <Text style={ titleStyle }>{ title }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default NavButton;