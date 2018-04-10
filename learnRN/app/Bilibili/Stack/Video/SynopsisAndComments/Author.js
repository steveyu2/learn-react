// 作者
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { Config, Images } from "../../../config/index";
import CustomButton from '../../../components/g/Button';

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  followBtn: {
    height: 25,
    paddingHorizontal: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3
  },
  followBtnIcon: {
    height: 16,
    width: 16,
    tintColor: '#fff',
    marginRight: 4
  },
  followBtnText: {
    color:'#fff',
    fontSize: 14
  },
  avatarMsgWrap: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center'
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 10
  },
  avatarTextBox: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  avatarName: {
    color: '#000',
    fontSize: 15
  },
  avatarfollow:{
    color: '#777',
    fontSize: 12
  }
});

class Author extends Component{
  render() {
    const {
      mainColor
    } = this.props;

    return (
      <View style={ styles.wrap }>
        <View style={ styles.avatarMsgWrap }>
          <Image source={ Images.beatbox } style={ styles.avatar } />
          <View style={ styles.avatarTextBox }>
            <Text style={ styles.avatarName }>swissbeatbox</Text>
            <Text style={ styles.avatarfollow }>4.2万粉丝</Text>
          </View>
        </View>
        <CustomButton>
          <View style={[
            styles.followBtn,
            {backgroundColor: mainColor}
          ]}>
            <Image source={ Images.add } style={ styles.followBtnIcon }/>
            <Text style={ styles.followBtnText }>关注</Text>
          </View>
        </CustomButton>
      </View>
    )
  }
}

export default Author;