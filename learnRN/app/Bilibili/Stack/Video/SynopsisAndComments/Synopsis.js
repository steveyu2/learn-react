// 简介和评论
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { Config, Images } from "../../../config/index";

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Config.TabNavScreenColor,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginVertical: 8
  },
  playdanmuWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  playdanmuWrap_icon: {
    height: 20,
    width: 20,
    tintColor: '#888'
  },
  playdanmuWrap_text: {
    fontSize: 12,
    marginLeft: 2,
    color: '#888'
  },
  synopsis: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5
  }
});

class Synopsis extends Component{
  render() {
    const {
      title,
      play,
      danmu
    } = this.props;

    return (
      <View style={ styles.wrap }>
        <Text style={ styles.title }>
          { title }
        </Text>
        <View style={ styles.playdanmuWrap }>
          <Image source={ Images.player } style={ styles.playdanmuWrap_icon }/>
          <Text style={ styles.playdanmuWrap_text }>{play}</Text>
          <Image source={ Images.danmu } style={[ styles.playdanmuWrap_icon, {marginLeft: 10} ]}/>
          <Text style={ styles.playdanmuWrap_text }>{danmu}</Text>
          <Text style={[ styles.playdanmuWrap_text, {marginLeft: 10} ]}>3-14</Text>
        </View>
        <Text style={ styles.synopsis }>简介：https://www.youtube.com/watch?v=j_MJLBArzI8&list=RDj_MJLBArzI8
          看了HISS vs NaPoM的视频之后瞬间爆炸想看原唱，发现B站没有，就从youtube搬了过来
        </Text>
      </View>
    )
  }
}

export default Synopsis;