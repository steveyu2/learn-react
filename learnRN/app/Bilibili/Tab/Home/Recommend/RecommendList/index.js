import React, { Component,PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FlatList from '../../../../components/g/FlatList/index';
import { Config,Images } from "../../../../config/index";
import ListItem from './ListLine';

class RecommendList extends PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  _onPressItem = (id) => {

  };

  _keyExtractor = (item, index) => item[0].id+item[1].id;

  _renderItem = ({item}) => (
    <ListItem
      data={item}
      onPressItem={this._onPressItem}
    />
  );

  render() {

    const {
      data,
      onRefresh,
      refreshing,
      style
    } = this.props;

    return (
      <FlatList
        style={style}
        refreshComponentColor={ Config.mainColor }
        data={data}
        refreshing={refreshing}
        onRefresh={onRefresh}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  wrap: {

  },
});
export default RecommendList;