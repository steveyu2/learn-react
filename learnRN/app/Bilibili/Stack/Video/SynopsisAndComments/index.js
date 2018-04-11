// 简介和评论
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import { Config, Images } from "../../../config/index";
import Author from "./Author";
import Synopsis from "./Synopsis";
import ButtonGroup from "./ButtonGroup"
import CustomButton from '../../../components/g/Button';

const styles = StyleSheet.create({
  wrap: {
     // transparent
    flex: 1
  }
});

class SynopsisAndComments extends Component{
  render() {
    const {
      mainColor,
      title,
      play,
      danmu
    } = this.props;

    return (
      <View style={ styles.wrap }>
        <Author mainColor={ mainColor }/>
        <Synopsis
          title={ title }
          play={ play }
          danmu={ danmu }
        />
        <ButtonGroup/>
        <CustomButton>
            <View style={{
                width: '100%',
                flexDirection: 'row'
            }}>
                <Image source={ Images.beatbox } style={{
                            height: 35,
                            width: 35,
                            borderRadius: 50,
                            marginLeft: 5,
                            marginRight: 15
                        }} />
                <View style={{
                    flex: 1,
                }}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{ fontSize: 13 }}>用户名</Text>
                        <Text style={{ fontSize: 13, marginRight: 5}}>#1    3小时前</Text>
                    </View>
                    <Text style={{ fontSize: 14, color: '#000', marginVertical: 8}}>啊啊啊啊啊啊啊，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</Text>
                    <View style={{
                        width: '50%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Image source={ Images.comment } style={{
                            height: 16,
                            width: 16,
                            tintColor: '#888'
                        }} />
                        <Image source={ Images.good } style={{
                            height: 16,
                            width: 16,
                            tintColor: '#888'
                        }} />
                        <Image source={ Images.good } style={{
                            height: 16,
                            width: 16,
                            tintColor: '#888',
                            transform: [{
                                scaleY: -1
                            }]
                        }} />
                    </View>
                </View>
            </View>
        </CustomButton>
      </View>
    )
  }
}

export default SynopsisAndComments;