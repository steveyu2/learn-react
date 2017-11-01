import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import { Config,Images } from "../../../config";
import ImgSwiper from "./ImgSwiper";
import ClassifyBtn from "./ClassifyBtn";

class SpecialColumn extends Component {


  constructor(props) {
    super(props);

    this.state={
      images: undefined
    }
  }

  componentDidMount() {
    this.getSpecialColumnSwipeImages()
  }

  getSpecialColumnSwipeImages() {
    const {
      getAppState
    } = this.props.screenProps;

    getAppState('SpecialColumnSwipeImages', [(data)=>{
      this.setState({
        images: data
      })
    }])
  }

  render() {

    return (
      <FadeInView style={ styles.wrap }>
        <View style={styles.top}>
          <ImgSwiper data={this.state.images}/>
          <ClassifyBtn />
        </View>
      </FadeInView>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Config.TabNavScreenColor
  },
  top: {
    padding: Config.TabNavScreenPadding
  }
});

export default SpecialColumn;