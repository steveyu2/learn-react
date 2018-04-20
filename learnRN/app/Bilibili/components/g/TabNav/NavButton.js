import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native';
import PropTypes from 'prop-types';
import isReactComponent from '../isReactComponent';

/**
 * @props
 *  style {obj|style} 样式
 *  underlayColor {string} 点击时按压的颜色
 *  onPress {function} 点击事件
 *  images.js {reactElement} 按钮图片
 *  title 按钮标题
 *  titleStyle 标题样式
 */
//TouchableNativeFeedback
class NavButton extends Component{

  static defaultProps = {
    style: {},
    titleStyle: {},
    onPress: ()=>{}
  }

  render() {
    const {
      btnStyle,
      underlayColor,
      onPress,
      images,
      title,
      titleStyle,
    } = this.props;

    var component;

    if(Platform.OS === 'android' && Platform.Version > 21){
      component = (
        <TouchableNativeFeedback
          style={ btnStyle }
          onPress={ onPress }
          background={ TouchableNativeFeedback.Ripple("#cdcdcd", true) }
        >
          <View style={ styles.wrap }>
            { images && images }
            <Text style={ titleStyle }>{ title }</Text>
          </View>
        </TouchableNativeFeedback>
      )
    }else{
      component = (
        <TouchableHighlight
          style={ btnStyle }
          underlayColor={ underlayColor }
          onShowUnderlay={ onPress }
          onPress={ ()=>{} }
        >
          <View style={ styles.wrap }>
            { images && images }
            <Text style={ titleStyle }>{ title }</Text>
          </View>
        </TouchableHighlight>
      )
    }

    return component
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});


NavButton.propTypes = {
  underlayColor: PropTypes.string,
  onPress: PropTypes.func,
  images: PropTypes.element,
  title: PropTypes.string,
};

export default NavButton;