import React, { Component } from 'react';
import { StyleSheet,FlatList, ScrollView, RefreshControl,Text,View } from 'react-native';
import TwinkleText from '../TwinkleText';
import PropTypes from 'prop-types';

/**
 * 封装FlatList上拉下拉
 * @props
 *  refreshComponentColor 下拉控件颜色
 *  progressBackgroundColor 背景颜色
 */

class FlatLists extends Component{
  static defaultProps = {
    onEndReached: ()=>{},
    refreshComponentColor: '#000',
    progressBackgroundColor: '#fff',
  }

  constructor(props) {
    super(props);

    this.state = {
      bottomRefresh: null // nomore refresh null
    }

    this.onEndReached = this.onEndReached.bind(this)
  }

  renderScrollComponent(props) {
    //if (this._isNestedWithSameOrientation()) {
    //  return <View {...props} />;
    //} else if (props.onRefresh) {
    if (props.onRefresh) {
      //invariant(
      //  typeof props.refreshing === 'boolean',
      //  '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' +
      //  JSON.stringify(props.refreshing) +
      //  '`',
      //);
      return (
        <ScrollView
          {...props}
          refreshControl={
            <RefreshControl
              progressBackgroundColor={props.progressBackgroundColor}
              colors={[props.refreshComponentColor]}
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
              progressViewOffset={props.progressViewOffset}
            />
          }
        />
      );
    } else {
      return <ScrollView {...props} />;
    }
  }

  footerComponent() {
    const isRefresh = this.state.bottomRefresh;
    var text = false;

    if(isRefresh === 'refresh') {
      text = <TwinkleText style={styles.footerRefreshText}>数据加载中...</TwinkleText>
    }else if(isRefresh === 'nomore'){
      text = <Text style={styles.footerRefreshText}>没有更多了 : )</Text>
    }

    return <View style={styles.footerRefresh}>{text}</View>
  }

  onEndReached() {
    this.props.onEndReached((loadSuccess, callback = ()=>{})=>{
      this.setState({
        bottomRefresh: loadSuccess
      }, callback)
    })
  }

  render() {
    const props = this.props;

    return (
      <FlatList
        renderScrollComponent={this.renderScrollComponent}
        {...props}
        ListFooterComponent={ this.footerComponent()}
        onEndReached={this.onEndReached}
      />
    )
  }
}

const styles = StyleSheet.create({
  footerRefresh: {
    width: "100%",
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerRefreshText: {
    marginTop: -5
  }
})

FlatLists.propTypes = {
  onEndReached: PropTypes.func,
  refreshComponentColor: PropTypes.string,
  progressBackgroundColor: PropTypes.string,
};

export default FlatLists;