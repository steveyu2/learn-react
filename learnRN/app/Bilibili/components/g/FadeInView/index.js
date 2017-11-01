// FadeInView.js
import React, { Component } from 'react';
import {
  Animated,
} from 'react-native';

export default class FadeInView extends Component {
  static defaultProps = {
    style: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
      }
    ).start();
  }
  render() {
    return (
      <Animated.View                            // 可动画化的视图组件
        style={[
          this.props.style,
          {opacity: this.state.fadeAnim},          // 将透明度指定为动画变量值
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}