import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import IconButton from '../../../components/g/IconButton';
import { Config, Images } from "../../../config";
import ImgSwiper from "./ImgSwiper";
import ClassifyBtn from "./ClassifyBtn";

class RecommendList extends Component {

  static defaultProps = {

  };

  render() {
    const {
      images,
      onItemPress
    } = this.props;

    return (
      <View style={styles.wrapper}>
          <ImgSwiper data={images}/>
          <ClassifyBtn onItemPress={onItemPress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: Config.TabNavScreenPadding,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  }
});

export default RecommendList;