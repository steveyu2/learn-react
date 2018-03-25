// 简介
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import FadeInView from '../../components/g/FadeInView';
import { Config } from "../../config";

class Synopsis extends Component{
    render() {
        return (
            <View style={ styles.wrap }>
                <Text>简介</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Config.TabNavScreenColor,
        height: 1000
    }
});

export default Synopsis;