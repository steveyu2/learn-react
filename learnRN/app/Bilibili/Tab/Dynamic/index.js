import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, ScrollView, RefreshControl } from 'react-native';
import FadeInView from '../../components/g/FadeInView';
import FlatList from '../../components/g/FlatList';
import Test from '../../components/g/Test';
import { Config } from "../../config";

//<FadeInView style={ styles.wrap }>

class Dynamic extends Component{

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <FadeInView style={styles.wrap} >
        <Text>动态</Text>
      </FadeInView>
    );
  }
}

//<FlatList
//  refreshComponentColor={[Config.mainColor]}
//  refreshing={ false }
//  onRefresh={() => {}}
//  ItemSeparatorComponent={ Test }
//  data={[
//      {key: 'a'},
//      {key: 'b'},
//      {key: 'c'},
//      {key: 'd'},
//      {key: 'qd'},
//      {key: 'ad'},
//      {key: 'bd'},
//      {key: 'cd'},
//      {key: 'hi'},
//    ]}
//  renderItem={({item}) => <Text>{item.key}</Text>}
///>

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#eee',
  }
});

export default Dynamic;