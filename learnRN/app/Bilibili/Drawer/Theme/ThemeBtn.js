import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import DrawerHeader from '../../components/DrawerHeader';
import SimplePropTypes from '../../components/g/simple-prop-types'
import Button from '../../components/g/Button';
import { Config, Images } from "../../config";
// import HeaderIcon from '../components/HeaderIcon';

class ThemeBtn extends Component{

  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this)
  }

  _onPress() {
    this.props._onPress(this.props.color)
  }

  render() {

    const {
      isActive,
      color,
      name
      } = this.props;
    var source, text, btnColor;

    if(isActive) {
      source = Images.tick
      text = '使用中'
      btnColor = color
    }else{
      source = Images.tick_fill
      text = '使用'
      btnColor = '#888'
    }


    return (
      <Button>
        <View style={ styles.wrapper }>
          <View style={ styles.leftView }>
            <Image
              source={ source }
              style={[ styles.icon, { tintColor: color } ]}
            />
            <Text style={[ styles.iconText, {color: color} ]}>{ name }</Text>
          </View>
          <Button
            noAction={true}
            style={[ styles.useBtn, {borderColor: btnColor} ]}
            onPress={ this._onPress }>
            <Text style={[ styles.useBtnText, {color: btnColor} ]}>{ text }</Text>
          </Button>
        </View>
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 18,
  },
  iconText: {
    marginLeft: 6,
    fontSize: 12,
  },
  useBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    padding: 3,
    width: 45
  },
  useBtnText: {
    fontSize: 11
  }
})

ThemeBtn.propTypes = SimplePropTypes(({ strRq, boolRq, funcRq })=>({
  isActive: boolRq,
  color: strRq,
  name: strRq,
  _onPress: funcRq
}))

export default ThemeBtn;