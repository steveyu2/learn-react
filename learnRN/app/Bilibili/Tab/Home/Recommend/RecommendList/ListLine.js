import React, { PureComponent  } from 'react';
import { StyleSheet, View, TouchableHighlight, Dimensions} from 'react-native';
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
        <ListItem
          onPress={this.props.onPressItem}
          id={ leftData.id }
          data={leftData}
          itemStyle={styles.item}
          itemWidth={ itemWidth }
        />
        <ListItem
          onPress={this.props.onPressItem}
          id={ rightData.id }
          data={rightData}
          itemStyle={styles.item}
          itemWidth={ itemWidth }
        />
      </View>
    )
  }
}
const itemWidth = 0;
const styles = (()=>{
  // 这里对上下左右间距 和 item的高度做了适应
  // 用item的flex 来算 wrap 的 padding
  const fourLostFiveWin = (num)=>(num.toFixed(5)*1)
  const distanceSize = (size)=>(fourLostFiveWin((1-size*2)/2/2/2));
  // alert(fourLostFiveWin(190/Dimensions.get('window').height)) // 0.2959
  const mediaWidth = Dimensions.get('window').width;
  const itemFlex = 0.475; // 0.48
  const paddingLR = mediaWidth * distanceSize(itemFlex) * 2; // padding Left Right
  //const itemHeight = fourLostFiveWin(Dimensions.get('window').height * 0.283); // 0.48
  itemWidth = (mediaWidth - paddingLR*2) * itemFlex;
  return StyleSheet.create({
    wrap: {
      flex: 1,
      marginTop: Config.TabNavScreenPadding,// 3.68
      paddingHorizontal: Config.TabNavScreenPadding - 4,
      //backgroundColor:'rgba(0,0,0,0)',
      flexDirection: 'row',
      justifyContent: 'space-around',
      //paddingLeft: paddingLR,
      //paddingRight: paddingLR,
      // alignItems: 'center',
    },
    item: {
      // height: itemHeight,
      flex: itemFlex,
    }
  });
})();

export default ListLine;
