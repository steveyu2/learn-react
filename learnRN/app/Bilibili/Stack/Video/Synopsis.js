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
                <ScrollView>
                    <FlatList
                      horizontal={false}
                      data={[
                        {key: '简介'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        // {key: 'Jimmy'},
                        // {key: 'John'},
                        // {key: 'Jillian'},
                        // {key: 'Jimmy'},
                        // {key: 'Julie'},
                        // {key: 'Julie'},
                        // {key: 'Julie'},
                        // {key: 'Julie'},
                      ]}
                      renderItem={({item}) =>  <Text style={{fontSize: 40}}>{item.key}</Text>}
                    />
                </ScrollView>
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