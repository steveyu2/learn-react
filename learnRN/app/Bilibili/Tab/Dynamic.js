import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, FlatList, ScrollView, RefreshControl } from 'react-native';
import FadeInView from '../components/g/FadeInView';
import Test from '../components/g/Test';
import { Config } from "../config";

//<FadeInView style={ styles.wrap }>

class Dynamic extends Component{

  renderScrollComponent(props) {
    //if (this._isNestedWithSameOrientation()) {
    //  return <View {...props} />;
    //} else if (props.onRefresh) {
    if (props.onRefresh) {
      //invariant(
      //  typeof props.refreshing === 'boolean',
      //  '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' +
      //  JSON.stringify(props.refreshing) +
      //  '`',
      //);
      return (
        <ScrollView
          {...props}
          refreshControl={
                <RefreshControl
                  colors={[Config.mainColor]}
                  refreshing={props.refreshing}
                  onRefresh={props.onRefresh}
                  progressViewOffset={props.progressViewOffset}
                />
              }
        />
      );
    } else {
      return <ScrollView {...props} />;
    }
  }

  render() {

    return (
      <FadeInView style={styles.wrap}>
        <FlatList
          renderScrollComponent={this.renderScrollComponent}
          refreshing={ true }
          onRefresh={() => {}}
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