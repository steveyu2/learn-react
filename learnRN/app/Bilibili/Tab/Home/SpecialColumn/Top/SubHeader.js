import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import IconButton from '../../../../components/g/IconButton';
import { Config,Images } from "../../../../config/index";
import SimplePropTypes from '../../../../components/g/simple-prop-types';

class SubHeader extends Component {

  static defaultProps = {
  };

  render() {

    var {
      navigation,
      mainColor
    } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>推荐文章</Text>
        <IconButton icon={ Images.ranking }  iconStyle={[ styles.icon, {tintColor: mainColor} ]} noAction={true} onPress={()=>{
          navigation.navigate('PlaceholderStack')
        }}>
          <Text style={[ styles.iconText,{color: mainColor} ]}>排行榜</Text>
        </IconButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Config.TabNavScreenPadding + 5,
    paddingBottom: Config.TabNavScreenPadding - 5,
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
    marginLeft: 8
  },
  iconText: {
    marginLeft: 4,
    fontSize:13
  }
});

SubHeader.propTypes = SimplePropTypes(({ shapeRq, funcRq })=>({
  navigation: shapeRq({
    navigate: funcRq,
  })
}))

export default SubHeader;