// 简介
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from 'react-native';
// import FadeInView from '../../components/g/FadeInView';
import { Config } from "../../config";
import NestedScrollView from 'react-native-nested-scroll-view';

class Synopsis extends Component{
    render() {
        return (
              <NestedScrollView style={{ flex: 1 }}>
                {
                  Array(20).fill(0).map(v=>
                    <Text style={{fontSize: 40}}>简介</Text>
                  )
                }
              </NestedScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: Config.TabNavScreenColor,
        flex: 1,
        //overflow: 'hidden'
    }
});

export default Synopsis;