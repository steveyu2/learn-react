import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, Dimensions, TouchableHighlight } from 'react-native';
import IconButton from '../../../../components/g/IconButton';
import SimplePropTypes from '../../../../components/g/simple-prop-types';
import { Config, Images } from "../../../../config";

class UserInfo extends Component {

  // static defaultProps = {
  //
  // };

  render() {

    const paddingStyle = {
      padding: this.props._padding
    }

    const {
      avatar,
      nikeName
    } = this.props;

    return (
      <View style={ [paddingStyle,styles.wrapper] }>
        <IconButton icon={ {uri: avatar} }  iconStyle={ styles.icon } noAction={true}>
          <Text style={styles.iconText}>{nikeName}</Text>
        </IconButton>
      </View>
    )
  }
}

const mediaWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  icon: {
    height: 22,
    width: 22,
    borderRadius: 50
  },
  iconText: {
    fontSize: 15,
    color: '#888',
    marginLeft: 10,
  }
});

UserInfo.propTypes = (({ strRq })=>({
  type: strRq,
  view: strRq,
  like: strRq,
  reply: strRq,
}))(SimplePropTypes);

export default UserInfo;