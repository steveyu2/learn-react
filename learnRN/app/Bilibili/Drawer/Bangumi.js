import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import DrawerHeader from '../components/DrawerHeader'

class Bangumi extends Component{

  render() {

    return (
      <DrawerHeader
        title="番剧"
      />
    )
  }
}

export default Bangumi;