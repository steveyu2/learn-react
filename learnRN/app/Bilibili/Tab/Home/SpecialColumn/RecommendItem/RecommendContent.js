import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, Dimensions, TouchableHighlight } from 'react-native';
import IconButton from '../../../../components/g/IconButton';
import { Config, Images } from "../../../../config";

class RecommendContent extends Component {

  static defaultProps = {
  };

  render() {

    const paddingStyle = {padding: this.props._padding};
    const {
      title,
      cover,
      content
    } = this.props;

    const contentPaddingStyle = {
      paddingTop: this.props._padding - 5,
      padding: this.props._padding,
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

const mediaWidth = Dimensions.get('window').width;
const mediaHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrapper: {

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

export default RecommendContent;