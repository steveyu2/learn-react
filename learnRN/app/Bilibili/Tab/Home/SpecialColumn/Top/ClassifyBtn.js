import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import IconButton from '../../../../components/g/IconButton/index';
import { Config,Images } from "../../../../config/index";

class ClassifyBtn extends Component {

  static defaultProps = {
  };

  iconButtons() {

    const {
      onItemPress
    } = this.props;

    return [
      [Images.cd, '动画', 'anime'],
      [Images.game, '游戏', 'game'],
      [Images.novel, '轻小说', 'novel'],
      [Images.starBall, '科技', 'science'],
      [Images.other, '其他', 'other'],
    ].map((v,i)=>(
      <IconButton
        key={i}
        icon={v[0]}
        iconStyle={styles.itemIcon}
        wrapperStyle={styles.item}
        btnStyle={styles.itembtn}
        noAction={true}
        onPress={()=>{onItemPress(v[2])}}>
        <Text style={styles.itemText}>{v[1]}</Text>
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
    paddingVertical: Config.TabNavScreenPadding * 2,
    paddingHorizontal: Config.TabNavScreenPadding * 2
  },
  itembtn: {
  },
  item: {
    //width:100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemIcon: {
    height: 40,
    width: 40
  },
  itemText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  }
});

export default ClassifyBtn;