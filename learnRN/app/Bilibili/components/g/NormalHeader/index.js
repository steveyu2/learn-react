import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * @props
 *   headerStyle {obj|StyleSheet} 头部样式
 *   title {string} 标题
 *   titleStyle {obj|StyleSheet} 标题
 *   HeaderLeft {ReactComponent} 左侧组件
 *   HeaderRight {ReactComponent} 右侧组件
 *   componentProps {obj} 传入左右侧组件props
 *   align {string} 标题对齐
 */

class NormalHeader extends Component{

  static defaultProps = {
    headerStyle: {},
    titleStyle: {},
    align: 'center',
    componentProps: {},
  };

  render() {
    const {
      headerStyle,
      title,
      titleStyle,
      HeaderLeft,
      HeaderRight,
      componentProps,
      align
    } = this.props;

    const TITLE = <Text style={ [styles.title, titleStyle] }>{ !!title && title }</Text>;

    return (
      <View style={[ styles.header, headerStyle ]}>
        <View style={[ styles.headerChild, styles.headerLeft]}>
          {!!HeaderLeft &&
            <HeaderLeft { ...componentProps }/>
          }
          { align === 'left' && TITLE }
        </View>
        <View style={[ styles.headerChild, styles.headerCenter]}>
          { align === 'center' && TITLE }
        </View>
        <View style={[ styles.headerChild, styles.headerRight]}>
          { align === 'right' && TITLE }
          {!!HeaderRight &&
            <HeaderRight { ...componentProps }/>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#1E90FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: "#fff"
  },
  headerChild:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeft: {
    justifyContent: 'flex-start',
  },
  headerCenter: {
    justifyContent: 'center',
  },
  headerRight: {
    justifyContent: 'flex-end',
  },
});

NormalHeader.propsTypes = {
  icon: PropTypes.isRequired,
  align: PropTypes.string.isRequired,
};

export default NormalHeader;