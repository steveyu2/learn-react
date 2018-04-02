// 简介
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from 'react-native';
// import FadeInView from '../../components/g/FadeInView';
import { Config } from "../../config";

class Synopsis extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Button
                  title="123123"
                  onPress={()=>alert(123)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: Config.TabNavScreenColor,
        //overflow: 'hidden'
    }
});

export default Synopsis;