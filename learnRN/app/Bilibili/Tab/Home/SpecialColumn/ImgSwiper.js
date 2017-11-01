import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../../../components/g/FadeInView';
import { Config,Images } from "../../../config";
import Swiper from 'react-native-swiper';

class ImgSwiper extends Component {

  static defaultProps = {
    data: Array(4).fill('1'),
  };

  render() {

    var {
      data
      } = this.props;

    //data = ['','','','']
    return (
      <View style={styles.wrapper}>
        <Swiper style={{flex:1}} autoplay={true}>
          {
            data.map((v,i)=>{
              return (
                <View key={i} style={{flex:1}}>
                  <Image style={styles.imgItem} source={{uri: v}}/>
                </View>
              )
            })
          }
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 150,
  },
  imgItem: {
    flex: 1,
    borderRadius: 5
  }
});

export default ImgSwiper;