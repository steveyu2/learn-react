import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import IconButton from '../../../components/g/IconButton';
import { Config,Images } from "../../../config";

class ClassifyBtn extends Component {

  static defaultProps = {
  };

  iconButtons() {
    return [
      [Images.cd, '动画'],
      [Images.game, '游戏'],
      [Images.novel, '轻小说'],
      [Images.starBall, '科技'],
      [Images.other, '其他'],
    ].map((v,i)=>(
      <IconButton
        key={i}
        icon={v[0]}
        iconStyle={styles.itemIcon}
        wrapperStyle={styles.item}
        btnStyle={styles.itembtn}>
        <Text>{v[1]}</Text>
      </IconButton>
    ))
  }

  render() {

    var {
      data
      } = this.props;

    //data = ['','','','']
    return (
      <View style={styles.wrapper}>
        {this.iconButtons()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itembtn: {
    width:100,
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemIcon: {
    height: 30,
    width: 30
  }
});

export default ClassifyBtn;