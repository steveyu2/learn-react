import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import IconButton from '../../../../components/g/IconButton';
import SimplePropTypes from '../../../../components/g/simple-prop-types';
import { Config, Images } from "../../../../config";

class RecommendContent extends Component {

  //static defaultProps = {
  //
  //};

  render() {

    const {
      title,
      cover,
      content,
      _padding
    } = this.props;
    const paddingStyle = {padding: _padding};

    const contentPaddingStyle = {
      paddingTop: _padding - 5,
      padding: _padding,
    };

    return (
      <View style={styles.wrapper}>
        <Text style={[paddingStyle, styles.title]} numberOfLines={2}>
          {title}
        </Text>
        <Image source={{uri: cover}} style={ styles.cover }/>
        <Text style={[contentPaddingStyle, styles.content]} numberOfLines={2}>
          {content}
        </Text>
      </View>
    )
  }
}

const mediaWidth = Config.mediaWidth;
const mediaHeight = Config.mediaHeight;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff'
  },
  title: {
    color: '#000',
    fontSize: 18,
    paddingTop: 0,
  },
  content: {
    color: '#777',
    fontSize: 16,
    lineHeight: 28,
  },
  cover: {
    width: '100%',
    height: mediaHeight * 1/7
  }
});

RecommendContent.propTypes = SimplePropTypes(({ strRq, numRq })=>({
  title: strRq,
  cover: strRq,
  content: strRq,
  _padding: numRq
}))

export default RecommendContent;