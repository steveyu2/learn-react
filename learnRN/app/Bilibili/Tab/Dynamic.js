import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import FadeInView from '../components/g/FadeInView';
import Test from '../components/g/Test';
import { Config } from "../config";

//<FadeInView style={ styles.wrap }>

class Dynamic extends Component{

  render() {

    return (
      <FadeInView style={styles.wrap}>
        <FlatList
          refreshing={ false }
          onRefresh={() => alert(1)}
          ListHeaderComponent={ (a)=>{
          debugger
          } }
          ItemSeparatorComponent={ Test }
          data={[
              {key: 'a'},
              {key: 'b'},
              {key: 'c'},
              {key: 'd'},
              {key: 'qd'},
              {key: 'ad'},
              {key: 'bd'},
              {key: 'cd'},
              {key: 'hi'},
            ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </FadeInView>
    );
  }
}


const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#eee',
  }
});

export default Dynamic;