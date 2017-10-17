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

    this.state = {
      text: '123'
    }
  }

  render() {

    return (
      <FadeInView style={styles.wrap} >
        <Button
          onPress={()=>{
            this.setState({
              text: 'dddd'
            })
          }} title="buttn"/>
        <Text>{ this.state.text }</Text>
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