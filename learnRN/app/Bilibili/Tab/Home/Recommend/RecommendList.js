import React, { Component,PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import FlatList from '../../../components/g/FlatList';
import { Config,Images } from "../../../config";

class RecommendList extends PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  _onPressItem = (id) => {
    alert(id)
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <ListItem
      id={item.id}
      onPressItem={this._onPressItem}
      title={item.title}
    />
  );

  render() {

    const {
      data,
      onRefresh,
      refreshing,
      } = this.props;

    return (
      <FlatList
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
class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <Text
        onPress={this._onPress}
      >
        {this.props.title}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {

  },
});
export default RecommendList;