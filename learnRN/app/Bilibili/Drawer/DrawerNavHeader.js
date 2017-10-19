import React, { Component } from 'react';
import {ScrollView,SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import DrawerHeader from '../components/DrawerHeader';
import HeaderIcon from '../components/HeaderIcon';
import { Images, Config } from "../config";

class DrawerNavHeader extends Component{

  render() {

    return (
      <View style={ styles.wrap }>
        <View style={ styles.top }>
          <Image source={ Images.defaultAvatar } style={ styles.avatar }/>
        </View>
        <View style={ styles.bottom }>
          <View style={ styles.bottomLine }>
            <Text style={ styles.userName } >未登录</Text>
            <Text style={ [styles.borderText] } >Lv {"0"}</Text>
            <Text style={ [styles.borderText, styles.huiyuan] } >非会员</Text>
          </View>
          <View style={ styles.bottomLine }>
            <Text style={ styles.downText }>积分 : {'0'}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: 140,
    backgroundColor: Config.mainColor,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 8,
  },
  top: {
    flex: 1.6,
    flexDirection: 'row',
    //backgroundColor: '#000',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'blue',
    justifyContent: 'space-around',
    //marginLeft: 8,
  },
  bottomLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height:60,
    width:60,
    borderRadius: 50
  },
  userName: {
    fontWeight: "600",
    color: Config.fontColor,
    fontSize: Config.drawerHeaderFontSize,
  },
  downText: {
    color: Config.drawerHeaderSmallFontColor,
    fontSize: Config.drawerHeaderSmallFontSize,
  },
  huiyuan: {
    color: Config.mainColor,
    backgroundColor: Config.drawerHeaderSmallFontColor,
  },
  borderText: {
    marginLeft: 5,
    // marginTop: 5,
    fontSize: 9,
    height: 15,
    padding: 2,
    borderWidth: 1.2,
    borderRadius: 2,
    lineHeight: 11,
    borderStyle: 'solid',
    textAlign: 'center',
    color: Config.fontColor,
    borderColor: Config.fontColor,
  }
})

export default DrawerNavHeader;