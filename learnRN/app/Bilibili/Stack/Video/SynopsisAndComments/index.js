// 简介和评论
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import { Config, Images } from "../../../config/index";
import Author from "./Author";
import Synopsis from "./Synopsis";
import ButtonGroup from "./ButtonGroup"

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Config.TabNavScreenColor,
    flex: 1,
  }
});

class SynopsisAndComments extends Component{
  render() {
    const {
      mainColor,
      title,
      play,
      danmu
    } = this.props;

    return (
      <View style={ styles.wrap }>
        <Author mainColor={ mainColor }/>
        <Synopsis
          title={ title }
          play={ play }
          danmu={ danmu }
        />
        <ButtonGroup/>
      </View>
    )
  }
}

export default SynopsisAndComments;