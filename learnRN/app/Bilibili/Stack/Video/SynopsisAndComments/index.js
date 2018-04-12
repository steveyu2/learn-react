// 简介和评论
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import { Config, Images } from "../../../config/index";
import Author from "./Author";
import Synopsis from "./Synopsis";
import ButtonGroup from "./ButtonGroup";
import CommentView from "./CommentView";


const styles = StyleSheet.create({
  wrap: {
     // transparent
    flex: 1
  }
});

class SynopsisAndComments extends Component{
  render() {
    const {
      mainColor,
      title,
      play,
      danmu,
      minHeight,
      paddingVal
    } = this.props;

    return (
      <View style={[ styles.wrap, {minHeight: minHeight + 50}]}>
        <View style={{ width: '100%', padding: paddingVal}}>
          <Author mainColor={ mainColor }/>
          <Synopsis
            title={ title }
            play={ play }
            danmu={ danmu }
          />
          <ButtonGroup />
        </View>
        <View style={{backgroundColor: '#999', height: 0.5,width: '100%', marginVertical: 8}} />
        <CommentView paddingVal={ paddingVal }/>
      </View>
    )
  }
}

export default SynopsisAndComments;