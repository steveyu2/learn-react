import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import IconButton from '../../../../components/g/IconButton';
import { Config,Images } from "../../../../config/index";

class ClassifyBtn extends Component {

  static defaultProps = {
  };

  render() {

    var {
      screenProps
    } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>推荐文章</Text>
        <IconButton icon={ Images.ranking }  iconStyle={ styles.icon } noAction={true} onPress={()=>{
          screenProps._navigation.navigate('PlaceholderStack')
        }}>
          <Text style={styles.iconText}>排行榜</Text>
        </IconButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: Config.TabNavScreenPadding + 5,
    paddingHorizontal: Config.TabNavScreenPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  title: {
    fontSize:15,
    color: '#000'
  },
  icon: {
    height:20,
    width: 20,
    marginLeft: 8,
    tintColor: Config.mainColor
  },
  iconText: {
    marginLeft: 4,
    fontSize:13,
    color: Config.mainColor
  }
});

export default ClassifyBtn;