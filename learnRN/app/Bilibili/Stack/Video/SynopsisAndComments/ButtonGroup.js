// 简介和评论
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import { Config, Images } from "../../../config/index";
import CustomButton from '../../../components/g/Button';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  }
});

class ButtonGroup extends Component{
  constructor() {
    super();

    this.Buttons = [
      [Images.good_fill, '1479'],
      [Images.yingbi_fill, '709'],
      [Images.favor_fill, '419'],
      [Images.download3, '缓存'],
      [Images.share, '79']
    ].map(v=>({img: v[0], text: v[1]}));
  }
  myButton(img, text, key) {
    return(
      <CustomButton key={ key }>
        <View style={{
          flex: 1,
          height: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={ img } style={{
            height: 27,
            width: 27,
            tintColor: '#666'
          }}/>
          <Text style={{fontSize: 12}}>{ text }</Text>
        </View>
      </CustomButton>
    )
  }
  render() {
    // const {
    // } = this.props;

    return (
      <View style={ styles.wrap }>
        {
          this.Buttons.map((v, i)=>this.myButton(v.img, v.text, i))
        }
      </View>
    )
  }
}

export default ButtonGroup;