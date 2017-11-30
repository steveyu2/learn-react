import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Config,Images } from "../../../config";
import IconButton from '../../../components/g/IconButton';
import SimplePropTypes from '../../../components/g/simple-prop-types';

class SubTitle extends Component {

  render() {

    const {
      title,
      style,
      mainColor,
      navigation
      } = this.props,
      iconStyle = [styles.icon, {tintColor: mainColor}];

    return (
      <View style={[styles.wrap, style]}>
        <Text style={ styles.title }>{ title }</Text>
        <View style={ styles.iconGruop }>
          <IconButton icon={ Images.ranking }  iconStyle={ iconStyle } noAction={true} onPress={()=>{
              navigation.navigate('PlaceholderStack')
          }}>
            <Text style={styles.iconText}>排行榜</Text>
          </IconButton>
          <IconButton icon={ Images.tag }  iconStyle={ iconStyle } noAction={true} onPress={()=>{
              navigation.navigate('PlaceholderStack')
          }}>
            <Text style={styles.iconText}>标签</Text>
          </IconButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    //以下是阴影属性：
    //shadowOffset: {width: 0, height: 5},
    //shadowOpacity: 0.5,
    //shadowRadius: 5,
    //shadowColor: "#000",
    //注意：这一句是可以让安卓拥有灰色阴影
    //elevation: 24,
    //zIndex: 0
  },
  title: {
    fontSize: 14,
    marginLeft: 15,
    color: '#888'
  },
  icon: {
    height:20,
    width: 20,
    marginLeft: 8
  },
  iconGruop: {
    flexDirection: 'row',
    marginRight: 15,
  },
  iconText: {
    marginLeft: 4,
    fontSize:13
  }
});

SubTitle.propTypes = SimplePropTypes(({ strRq, boolRq, objOfRq, arrOfRq, shape, shapeRq, funcRq })=>({
  title: strRq,
  mainColor: strRq,
  navigation: shapeRq({
    navigate: funcRq,
  })
}))

export default SubTitle;