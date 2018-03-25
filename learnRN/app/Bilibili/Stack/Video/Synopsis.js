// 简介
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import FadeInView from '../../components/g/FadeInView';
import { Config } from "../../config";

class Synopsis extends Component{
    render() {
        return (
            <FadeInView style={ styles.wrap }>
                <Text>简介</Text>
            </FadeInView>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Config.TabNavScreenColor
    }
});

export default Synopsis;