import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import FadeInView from '../../components/g/FadeInView';

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

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#eee',
  }
});

export default Dynamic;