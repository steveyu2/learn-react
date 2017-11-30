import React, { Component,PureComponent } from 'react';
import { StyleSheet, NetInfo } from 'react-native';
import FlatList from '../../../../components/g/FlatList/index';
import SimplePropTypes from '../../../../components/g/simple-prop-types';
import isReactComponent from '../../../../components/g/isReactComponent';
import { Config,Images } from "../../../../config/index";
import ListLine from './ListLine';

class RecommendList extends PureComponent {

  //_onPress = () => {
  //  this.props.onPressItem(this.props.id);
  //};

  constructor(props) {
    super(props);
  }

  _keyExtractor = (item, index) => item[0].id + item[1].id;

  _renderItem = ({item}) => (
    <ListLine
      data={ item }
      onPressItem={ this.props.onPressItem }
    />
  );

  render() {
    const {
      data,
      onRefresh,
      refreshing,
      style,
      pullUpRefresh,
      failComponent,
      firstOnRefresh,
      refreshComponentColor
    } = this.props;

    return (
      <FlatList
        style={ style }
        refreshComponentColor={ refreshComponentColor }
        data={ data }
        onEndReached={ pullUpRefresh }
        onEndReachedThreshold={ 0.02 }
        refreshing={ refreshing }
        onRefresh={ onRefresh }
        keyExtractor={ this._keyExtractor }
        renderItem={ this._renderItem }
        failComponent={ failComponent }
        firstOnRefresh={ firstOnRefresh }
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
  onPressItem: funcRq,
  pullUpRefresh: funcRq,
  onRefresh: funcRq,
  refreshing: boolRq,
  firstOnRefresh: boolRq,
  refreshComponentColor: strRq,
  failComponent: isReactComponent,
}))

export default RecommendList;