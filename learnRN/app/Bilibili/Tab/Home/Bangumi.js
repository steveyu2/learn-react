import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FadeInView from '../../components/g/FadeInView';

class Bangumi extends Component {

  render() {
    return (
      <FadeInView>
        <Text>Bangumi{this.props.getAppState('mainColor')}</Text>
      </FadeInView>
    );
  }
}

export default Bangumi;