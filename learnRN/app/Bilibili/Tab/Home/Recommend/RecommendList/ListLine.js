import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
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
    return (
      <TouchableHighlight
        style={ styles.item }
        underlayColor={ "#ddd" }
        activeOpacity={ null }
        onPress={ this._onPress }
      >
        <View>
          <Text>ddd</Text>
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

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    flex: 0.48,
    height: 100,
    backgroundColor: 'yellow'
  }
});

export default ListLine;