import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import DrawerHeader from '../../components/DrawerHeader';
import SimplePropTypes from '../../components/g/simple-prop-types'
import { Config } from "../../config";
import ThemeBtn from "./ThemeBtn";
// import HeaderIcon from '../components/HeaderIcon';

class Theme extends Component{

  Themes() {
    var themes = [...Config.themes]
    var mainColor = this.props.screenProps.mainColor
    var onPress = this.props.screenProps.setMainColor

    return themes.map((theme, i)=>(
      <ThemeBtn
        key={i}
        isActive={ mainColor === theme.color }
        color={ theme.color }
        name={ theme.name }
        _onPress={ onPress }
      />
    ))
  }

  render() {

    const {
      screenProps,
      navigation
      } = this.props;

    return (
      <View style={ styles.wrap }>
        <DrawerHeader
          title="主题"
          navigation={ navigation }
          mainColor={ screenProps.mainColor }
        />
        <ScrollView >
          <View style={ styles.title }>
            <Text style={ styles.titleText }>主题选择</Text>
          </View>
          {
            this.Themes()
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content:{
    flex: 1,
    backgroundColor: "#000"
  },
  title:{
    height: 40,
    width: '100%',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  titleText:{
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 5,
  }
})

Theme.propTypes = SimplePropTypes(({ strRq, funcRq, shapeRq})=>({
  screenProps: shapeRq({
    setMainColor: funcRq,
    mainColor: strRq
  })
}))

export default Theme;