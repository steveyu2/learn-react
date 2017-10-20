import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Config,Images } from "../../../config";

class SubTitle extends Component {

  render() {

    const {
      title,
      style
      } = this.props;

    return (
      <View style={[styles.wrap, style]}>
        <Text style={ styles.title }>{ title }</Text>
        <View style={ styles.iconGruop } >
          <Image source={ Images.find } style={ styles.icon } />
          <Image source={ Images.layers } style={ styles.icon } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: 'rgba(200,200,200,0.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
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
    height:22,
    width: 22,
    marginLeft: 8,
    tintColor: Config.mainColor
  },
  iconGruop: {
    flexDirection: 'row',
    marginRight: 15,
  }
});
export default SubTitle;