// FadeInView.js
import React, { Component } from 'react';
import {
  Text
} from 'react-native';

export default class TwinkleText extends Component {
  static defaultProps = {
    style: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      fade: 1          // 透明度初始值设为1
    };
    this.fadeAnime=this.fadeAnime.bind(this)
  }
  componentDidMount() {
    this.fadeAnime(true)
  }
  fadeAnime(isDecline) {
    const fade = this.state.fade;

    if(fade >= 1){
      isDecline = true;
    }else if(fade <= 0){
      isDecline = false;
    }

    const addfade = isDecline?-0.1:0.1;

    this.timer = setTimeout(()=>{
      this.setState({
        fade: fade + addfade
      },()=>{
        this.fadeAnime(isDecline)
      })
    },1000/20)
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  render() {
    // alert(this.state.fade)
    return (
      <Text style={[{opacity: this.state.fade},this.props.style]}>{this.props.children}</Text>
    );
  }
}