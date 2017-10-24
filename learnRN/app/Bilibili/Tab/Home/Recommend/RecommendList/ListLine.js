import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import { Config,Images } from "../../../../../config/index";

class ListLine extends PureComponent {

  render() {
    return (
      <View style={ styles.wrap }>
        <ListItem onPress={this.props.onPress} id={this.data[0].id}/>
        <ListItem onPress={this.props.onPress} id={this.data[1].id}/>
      </View>
    )
  }
}

class ListItem extends PureComponent {

  render() {
    return (
      <TouchableHighlight
        style={ btnStyle }
        underlayColor={ Config.underlayColor}
        activeOpacity={ null }
        onPress={ ()=>onPress(this.props) }
      >
        <Image source={ icon } style={ iconStyle } />
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
  }
});

export default ListLine;