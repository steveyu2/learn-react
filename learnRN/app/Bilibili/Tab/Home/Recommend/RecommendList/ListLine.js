import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight, Dimensions, ImageBackground } from 'react-native';
import { Config,Images } from "../../../../config/index";


class ListItem extends PureComponent {

  _onPress = () => {
    const {
      onPress,
      id
    } = this.props;
    onPress(id);
  }

  render() {

    const {
      data,
      } = this.props;

    return (
      <TouchableHighlight
        style={ styles.item }
        underlayColor={ "#ddd" }
        activeOpacity={ null }
        onPress={ this._onPress }
      >
        <View>
          <ImageBackground
            source={{uri: data.imageUrl}}
            style={ styles.item_image }
            resizeMode='cover'
            resizeMethod='scale'  >
            <View>
              <Text>123</Text>
            </View>
          </ImageBackground>
          <View style={ styles.item_bottom }>
            <Text>123</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

class ListLine extends PureComponent {
  static defaultProps = {
    data: [[],[]]
  };

  render() {

    var leftData = this.props.data[0];
    var rightData = this.props.data[1];
debugger
    return (
      <View style={ styles.wrap }>
        <ListItem onPress={this.props.onPressItem} id={ leftData.id } data={leftData}/>
        <ListItem onPress={this.props.onPressItem} id={ rightData.id } data={rightData}/>
        {/*<ListItem onPress={this.props.onPressItem} data={leftData}/>*/}
        {/*<ListItem onPress={this.props.onPressItem}  data={rightData}/>*/}
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
  const itemFlex = 0.47; // 0.48
  const itemHeight = fourLostFiveWin(Dimensions.get('window').height * 0.283); // 0.48

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
      overflow: 'hidden',
      flex: itemFlex,
      flexDirection: 'column',
      height: itemHeight,
      borderRadius: 10,
      backgroundColor: '#f6f6f6'
    },
    item_image: {
      //flex: 1,
      //overlayColor: '#000',
      height:90*2,
      width:160*2,
    },
    item_bottom: {
      flex: 0.5,
      backgroundColor: 'yellow'
    }
  });
})()

export default ListLine;
