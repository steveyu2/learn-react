import React, { Component } from 'react';
import { StyleSheet, NetInfo, View, Text, Button } from 'react-native';

/**
 * 加载失败组件
 */

class LoadFail extends Component{

  constructor(props) {
    super(props)

    this.state = {
      text:  '加载失败了'
    }
  }

  componentDidMount() {

    // 判断是否断开网路
    NetInfo.isConnected.fetch().done((isConnected) => {
      if(isConnected) {
        this.setState({
          text: '网络好像断开了'
        })
      }
    });
  }

  render() {

    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200
      }}>
        <Text style={ styles.leftText }>{ this.state.text }</Text>
        <Button onPress={ this.props.onPress } style={ styles.button } title="点击重试"/>
        <Text style={ styles.rightText }>:  )</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  leftText: {
    marginRight: 10
  },
  rightText: {
    marginLeft: 10
  },
  button: {
    height: 10
  }
});

LoadFail.propTypes = {

};

export default LoadFail;