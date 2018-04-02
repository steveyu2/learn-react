// 评论
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import FadeInView from '../../components/g/FadeInView';
import { Config } from "../../config";

class Comments extends Component{
  render() {
    return (
        <View style={ styles.wrap }>
            <Text style={{fontSize: 40}}>简介</Text>
            <Text style={{fontSize: 40}}>简介</Text>
            <Text style={{fontSize: 40}}>简介</Text>
            <Text style={{fontSize: 40}}>简介</Text>
            <Text style={{fontSize: 40}}>简介</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Config.TabNavScreenColor,
  }
});

export default Comments;