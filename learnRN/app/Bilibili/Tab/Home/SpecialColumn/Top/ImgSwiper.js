import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../../../../components/g/FadeInView/index';
import { Config,Images } from "../../../../config/index";
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
        <Swiper
          style={{flex:1,borderRadius}}
          autoplay={true}
          dot={<Dot active={false}/>}
          activeDot={<Dot active={true}/>}
          paginationStyle={styles.pagination}>
          {
            data.map((v,i)=>{
              return (
                <View key={i} style={{flex:1,borderRadius}}>
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

class Dot extends Component {
  render() {
    return <View style={this.props.active?styles.activeDot:styles.dot}/> ;
  }
}
const borderRadius = 5;
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 150,
    borderRadius
  },
  imgItem: {
    flex: 1,
    borderRadius
  },
  dot: {
    width: 8,
    height: 8,
    marginHorizontal: 2,
    borderRadius: 100,
    backgroundColor: '#fff'
  },
  activeDot: {
    width: 8,
    height: 8,
    marginHorizontal: 2,
    borderRadius: 100,
    backgroundColor: Config.mainColor
  },
  pagination: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    right: 15,
    bottom: 10
  }
});

export default ImgSwiper;