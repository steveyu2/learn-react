import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight, Dimensions, ImageBackground } from 'react-native';
import { Config,Images } from "../../../../config/index";
import ListItem from "./ListItem";

class ListLine extends PureComponent {
  static defaultProps = {
    data: [[],[]]
  };

  render() {

    var leftData = this.props.data[0];
    var rightData = this.props.data[1];
// debugger
    return (
      <View style={ styles.wrap }>
        <ListItem onPress={this.props.onPressItem} id={ leftData.id } data={leftData} itemStyle={styles.item}/>
        <ListItem onPress={this.props.onPressItem} id={ rightData.id } data={rightData} itemStyle={styles.item}/>
      </View>
    )
  }
}

const styles = (()=>{
  // 这里对上下左右间距 和 item的高度做了适应
  // 用item的flex 来算 wrap 的 padding
  const fourLostFiveWin = (num)=>(num.toFixed(5)*1)
  const distanceSize = (size)=>(fourLostFiveWin((1-size*2)/2/2/2));
  // alert(fourLostFiveWin(190/Dimensions.get('window').height)) // 0.2959
  const mediaWidth = Dimensions.get('window').width;
  const itemFlex = 0.48; // 0.48
  //const itemHeight = fourLostFiveWin(Dimensions.get('window').height * 0.283); // 0.48

  return StyleSheet.create({
    wrap: {
      flex: 1,
      paddingTop: mediaWidth * distanceSize(itemFlex) * 3.4,// 3.68
      paddingLeft: mediaWidth * distanceSize(itemFlex) * 2,
      paddingRight: mediaWidth * distanceSize(itemFlex) * 2,
      flexDirection: 'row',
      // alignItems: 'center',
      justifyContent: 'space-around',
    },
    item: {
      // height: itemHeight,
      flex: itemFlex,
    }
  });
})();

export default ListLine;
