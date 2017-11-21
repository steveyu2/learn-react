import React, { Component,PureComponent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FlatList from '../../../../components/g/FlatList/index';
import SimplePropTypes from '../../../../components/g/simple-prop-types';
import isReactComponent from '../../../../components/g/isReactComponent';
import { Config,Images } from "../../../../config/index";
import ListLine from './ListLine';

class RecommendList extends PureComponent {

  //_onPress = () => {
  //  this.props.onPressItem(this.props.id);
  //};

  _onPressItem = (id) => {

  };

  _keyExtractor = (item, index) => item[0].id + item[1].id;

  _renderItem = ({item}) => (
    <ListLine
      data={ item }
      onPressItem={ this._onPressItem }
    />
  );

  render() {
    const {
      data,
      onRefresh,
      refreshing,
      style,
      pullUpRefresh,
      failComponent
    } = this.props;

    return (
      <FlatList
        style={ style }
        refreshComponentColor={ Config.mainColor }
        data={ data }
        onEndReached={ pullUpRefresh }
        onEndReachedThreshold={ 0.1 }
        refreshing={ refreshing }
        onRefresh={ onRefresh }
        extraData={ this.state }
        keyExtractor={ this._keyExtractor }
        renderItem={ this._renderItem }
        failComponent={ failComponent }
      />
    );
  }
}

const styles = StyleSheet.create({

});

RecommendList.propTypes = SimplePropTypes(({ arrOfRq, strRq, shape, funcRq, boolRq })=>({
  data: arrOfRq(arrOfRq(shape({
    id: strRq,
    title: strRq,
    //videoUrl: strRq,
    imageUrl: strRq,
    videoTime: strRq,
    play: strRq,
    danmu: strRq,
    type: strRq,
  }))),
  pullUpRefresh: funcRq,
  onRefresh: funcRq,
  refreshing: boolRq,
  failComponent: isReactComponent
}))

export default RecommendList;