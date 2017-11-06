import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import IconButton from '../../../../components/g/IconButton';
import { Config, Images } from "../../../../config";
import ImgSwiper from "./ImgSwiper";
import ClassifyBtn from "./ClassifyBtn";
import SubHeader from "./SubHeader";

class RecommendList extends Component {

  static defaultProps = {

  };

  render() {
    const {
      images,
      onItemPress,
      screenProps
    } = this.props;

    return (
      <View>
        <View style={styles.wrapper}>
          <ImgSwiper data={images}/>
          <ClassifyBtn onItemPress={onItemPress}/>
        </View>
        <SubHeader screenProps={screenProps}/>
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