import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../components/g/FadeInView';

class Message extends Component{

  render() {
    return (
      <FadeInView>
        <Text>消息</Text>
      </FadeInView>
    )
  }
}

export default Message;