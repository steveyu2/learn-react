import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight, View, TouchableNativeFeedback,Platform } from 'react-native';
import PropTypes from 'prop-types';

/**
 * 图标按钮组件
 * @props
 *  noAction {boolean} 是否点击无回馈 默认false
 *  btnStyle {obj|StyleSheet} 按钮样式
 *  icon {image} 图片
 *  iconStyle {obj|StyleSheet} 按钮样式
 *  wrapperStyle {obj|StyleSheet}按钮内View样式
 *  onPress {function} 按钮事件
 *  underlayColor {string} 按钮点击时的背景颜色
 *  nativeUnderlayColor {string} 按钮点击时的扩散背景颜色
 */

class IconButton extends Component{

  static defaultProps = {
    noAction: false,
    btnStyle: {},
    iconStyle: {},
    wrapperStyle: {},
    onPress: ()=>{},
    underlayColor: '#eee',
    nativeUnderlayColor: '#eee'
  };

  render() {
    const {
      noAction,
      btnStyle,
      wrapperStyle,
      icon,
      iconStyle,
      underlayColor,
      nativeUnderlayColor,
      onPress,
    } = this.props;
    var component;

    if(Platform.OS === 'android' && Platform.Version > 21&&!noAction){
      component = (
        <TouchableNativeFeedback
          style={ btnStyle }
          onPress={ ()=>onPress(this.props) }
          background={ TouchableNativeFeedback.Ripple(nativeUnderlayColor, true) }
        >
          <View style={ [{flexDirection: 'row',alignItems: 'center'},wrapperStyle] }>
            <Image source={ icon } style={ iconStyle } />
            {this.props.children}
          </View>
        </TouchableNativeFeedback>
      )
    }else{
      component = (
        <TouchableHighlight
          style={ btnStyle }
          underlayColor={ !noAction? underlayColor : null }
          activeOpacity={ null }
          onPress={ ()=>onPress(this.props) }
        >
          <View style={[ {flexDirection: 'row',alignItems: 'center'}, wrapperStyle ]}>
            <Image source={ icon } style={ iconStyle } />
            { this.props.children }
          </View>
        </TouchableHighlight>
      )
    }

    return component;
  }
}

IconButton.propsTypes = {
  noAction: PropTypes.stirng,
  icon: PropTypes.any.isRequired,
  onPress: PropTypes.func,
  underlayColor: PropTypes.stirng,
  nativeUnderlayColor: PropTypes.stirng,
};

export default IconButton;