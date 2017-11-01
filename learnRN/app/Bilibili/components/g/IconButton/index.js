import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight, View, TouchableNativeFeedback,Platform } from 'react-native';
import PropTypes from 'prop-types';

/**
 * @props
 *  noAction {boolean} 是否点击无回馈 默认false
 *  btnStyle {obj|StyleSheet} 按钮样式
 *  icon {image} 图片
 *  iconStyle {obj|StyleSheet} 按钮样式
 *  onPress {function} 按钮事件
 */

class IconButton extends Component{

  static defaultProps = {
    noAction: false,
    btnStyle: {},
    iconStyle: {},
    wrapperStyle: {},
    underlayColor: '#eee',
    onPress: ()=>{},
  };

  render() {
    const {
      noAction,
      btnStyle,
      wrapperStyle,
      icon,
      iconStyle,
      underlayColor,
      onPress,
    } = this.props;
    var component;

    if(Platform.OS === 'android' && Platform.Version > 21&&!noAction){
      component = (
        <TouchableNativeFeedback
          style={ btnStyle }
          onPress={ ()=>onPress(this.props) }
          background={ TouchableNativeFeedback.Ripple(null, false) }
        >
          <View style={ wrapperStyle }>
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
          <View style={[{flexDirection: 'row'},wrapperStyle]}>
            <Image source={ icon } style={ iconStyle } />
            {this.props.children}
          </View>
        </TouchableHighlight>
      )
    }

    return component;
  }
}

IconButton.propsTypes = {
  noAction: PropTypes.string,
  icon: PropTypes.isRequired,
};

export default IconButton;