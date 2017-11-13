import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * 头部导航组件
 * @props
 *   headerStyle {obj|StyleSheet} 头部样式
 *   title {string} 标题
 *   titleStyle {obj|StyleSheet} 标题
 *   HeaderLeft {ReactComponent} 左侧组件
 *   HeaderRight {ReactComponent} 右侧组件
 *   align {string} 标题对齐
 */

class NormalHeader extends Component{

  static defaultProps = {
    headerStyle: {},
    titleStyle: {},
    align: 'center',
    HeaderLeft: null,
    HeaderRight: null,
  };

  render() {
    const {
      headerStyle,
      title,
      titleStyle,
      HeaderLeft,
      HeaderRight,
      align
    } = this.props;

    const TITLE = !!title? <Text style={ [styles.title, titleStyle] }>{ title }</Text>: null;

    return (
      <View style={[ styles.header, headerStyle ]}>
        <View style={[ styles.headerChild, styles.headerLeft]}>
          { HeaderLeft }
          { align === 'left' && TITLE }
        </View>
        <View style={[ styles.headerChild, styles.headerCenter]}>
          { align === 'center' && TITLE }
        </View>
        <View style={[ styles.headerChild, styles.headerRight]}>
          { align === 'right' && TITLE }
          { HeaderRight}
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
  title: PropTypes.string,
  icon: PropTypes.isRequired,
  align: PropTypes.string,
  HeaderRight: PropTypes.element,
  HeaderLeft: PropTypes.element,
};

export default NormalHeader;