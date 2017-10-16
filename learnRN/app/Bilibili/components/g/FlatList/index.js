import React, { Component } from 'react';
import { FlatList, ScrollView, RefreshControl } from 'react-native';

class FlatLists extends Component{

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
  render() {
    return (
      <FlatList
        renderScrollComponent={this.renderScrollComponent}
        {...this.props}
      />
    )
  }
}

export default FlatLists;