import React, { Component } from 'react';
import { Text } from 'react-native';

class History extends Component{

  render() {
    console.log(this.props)
    return (
      <Text>历史记录</Text>
    )
  }
}

export default History;