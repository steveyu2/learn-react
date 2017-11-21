import React, { Component } from 'react';
import { StyleSheet,FlatList, ScrollView, RefreshControl,Text,View } from 'react-native';
import TwinkleText from '../TwinkleText';
import isReactComponent from '../isReactComponent'
import PropTypes from 'prop-types';

/**
 * 封装FlatList上拉下拉
 * @props
 *  firstOnRefresh 是否进行初次onRefresh
 *  refreshComponentColor 下拉控件颜色
 *  progressBackgroundColor 背景颜色
 *  failComponent 失败的组件
 */

class FlatLists extends Component{
  static defaultProps = {
    onEndReached: ()=>{},
    refreshComponentColor: '#000',
    progressBackgroundColor: '#fff',
    failComponent: <Text>加载失败，点击重试...</Text>
  }

  constructor(props) {
    super(props);

    this.state = {
      bottomRefresh: null // nomore refresh fail null
    }

    this.onEndReached = this.onEndReached.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }

  componentDidMount() {
    const {
      firstOnRefresh
    } = this.props

    firstOnRefresh && this.onRefresh()
  }

  onRefresh() {
    const {
      onRefresh
    } = this.props;

    onRefresh && onRefresh({
      show: (callback) => this.setState({ bottomRefresh: failComponent }, callback),
      hide: (callback) => this.setState({ bottomRefresh: null }, callback)
    })
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
              progressBackgroundColor={ props.progressBackgroundColor }
              colors={[ props.refreshComponentColor ]}
              refreshing={ props.refreshing }
              onRefresh={ props.onRefresh }
              progressViewOffset={ props.progressViewOffset }
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
    const FailComponent = this.props.failComponent;
    var text = false;

    if(isRefresh === 'load') {
      text = <TwinkleText style={ styles.footerRefreshText }>数据加载中...</TwinkleText>
    }else if(isRefresh === 'nomore'){
      text = <Text style={ styles.footerRefreshText }>没有更多了 : )</Text>
    }else if(isRefresh === 'fail'){
      text = <Text style={ styles.footerRefreshText } onPress={ this.onEndReached }>加载失败了 : )，点击重试</Text>
    }else if(isRefresh === 'failComponent'){
      text = <FailComponent onPress={ this.onRefresh }/>
    }

    return <View style={ styles.footerRefresh }>{text}</View>
  }

  onEndReached() {
    this.props.onEndReached((loadState, callback = ()=>{}) => {
      this.setState({
        bottomRefresh: loadState
      }, callback)
    })
  }

  render() {
    const props = this.props;

    return (
      <FlatList
        renderScrollComponent={ this.renderScrollComponent }
        {...props}
        ListFooterComponent={ this.footerComponent() }
        onEndReached={ this.onEndReached }
        onRefresh={ this.onRefresh }
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
  failComponent: isReactComponent,
  firstOnRefresh: PropTypes.bool,
  onEndReached: PropTypes.func,
  refreshComponentColor: PropTypes.string,
  progressBackgroundColor: PropTypes.string,
};

export default FlatLists;