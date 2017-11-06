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
      title
    } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text style={[paddingStyle, styles.title]} numberOfLines={2}>
          {title}
        </Text>
        <Image />
      </View>
    )
  }
}

const mediaWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {

  },
  title: {
    color: '#000',
    fontSize: 18,
    paddingTop: 0,
  },

});

export default RecommendContent;