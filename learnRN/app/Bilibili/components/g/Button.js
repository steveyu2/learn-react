import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native';
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

class Button extends Component{

  static defaultProps = {
    noAction: false,
    RippleDiffusion: false,
    underlayColor: '#eee',
    nativeUnderlayColor: '#eee'
  };

  render() {
    const props = this.props,{
        noAction,
        underlayColor,
        nativeUnderlayColor,
        RippleDiffusion,
      } = props;

    for(let i in props){
      if([
          'noAction',
          'underlayColor',
          'nativeUnderlayColor',
          'RippleDiffusion'
        ].indexOf(i) !== -1) delete props[i];


      if(Platform.OS === 'android' && Platform.Version > 21&&!noAction){
        return (
          <TouchableNativeFeedback
            background={ TouchableNativeFeedback.Ripple(nativeUnderlayColor, RippleDiffusion) }
            {...props}
          >
            {props.children}
          </TouchableNativeFeedback>
        )
      }else{
        return (
          <TouchableHighlight
            underlayColor={ !noAction? underlayColor : null }
            activeOpacity={ null }
            {...props}
          >
            {props.children}
          </TouchableHighlight>
        )
      }
    }
  }
}

Button.propTypes = {
  noAction: PropTypes.bool,
  underlayColor: PropTypes.string,
  nativeUnderlayColor: PropTypes.string,
};

export default Button;