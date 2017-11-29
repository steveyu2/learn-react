import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../../../../components/g/FadeInView/index';
import { Config, Images } from "../../../../config/index";
import Swiper from 'react-native-swiper';
import SimplePropTypes from '../../../../components/g/simple-prop-types';

class ImgSwiper extends Component {

  render() {

    var {
      data,
      mainColor
      } = this.props;

    //data = ['','','','']
    return (
      <View style={styles.wrapper }>
        <Swiper
          style={{ flex:1, borderRadius: 50 }}
          autoplay={ true }
          dot={ <Dot active={ false } mainColor={ mainColor }/> }
          activeDot={ <Dot active={ true }/> mainColor={ mainColor }}
          autoplayTimeout={ 4 }
          paginationStyle={ styles.pagination }>
          {
            data.map((v, i)=>{
              return (
                <View key={ i } style={{flex:1, borderRadius }}>
                  <Image style={ styles.imgItem } source={{ uri: v }}/>
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
    const {
      mainColor,
      active
    } = this.props;
    return <View style={ active? [ styles.activeDot, {backgroundColor: mainColor} ]: styles.dot }/> ;
  }
}
const borderRadius = 5;
const SwiperHeight = (Config.mediaWidth - Config.TabNavScreenPadding * 2) * 212/680;
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: SwiperHeight,
    borderRadius,
    backgroundColor: '#fff'
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

ImgSwiper.propTypes = SimplePropTypes(({ arrOfRq, strRq })=>({
  data: arrOfRq(strRq),
  mainColor: strRq
}))

export default ImgSwiper;