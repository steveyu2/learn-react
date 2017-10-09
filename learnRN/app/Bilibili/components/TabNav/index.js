import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import NavButton from './NavButton';
import NavHeader from './NavHeader';
import PropTypes from 'prop-types';

/**
 *  navConfigs {obj}
 *   @key {string} 路由名称
 *   @value {obj} 配置信息
 *     screen {ReactElement} 路由显示组件
 *     label {string} 下面导航路由显示的名称
 *     title {string} 上面显示的标题 null不显示 默认为label
 *     headerLeft {导航头部左边显示的组件} null 为不显示
 *     headerRight {导航头部右边显示的组件} null 为不显示
 *     icon {function(focused,tintColor)}  图标
 *        focused {boolean} 是否选中
 *        tintColor {string} 选中的颜色
 *  config {obj}
 *    headerLeft {ReactElement} 导航头部左边显示的组件会被navConfigs 的 headerLeft
 *    headerRight {ReactElement} 导航头部右边显示的组件会被navConfigs 的 覆盖
 *    onPress {function(routeName)} 路由按下事件 根据return的boolean判断是否跳转路由
 *    underlayColor {string} 点击时的颜色
 *    activeColor {string} 选中的颜色
 *    unActiveColor {string} 未选中的颜色
 *    headerStyle {obj} 头部样式
 */
class TabNav extends Component{

  constructor(props) {
    super(props);
    const routes = [];

    for(let i in this.props.navConfigs){
      routes.push(i);
    }

    // 当前路由
    this.state={
      currentRoute: routes[0]
    };
  }

  // 点击改变路由
  _onPress(route) {
    const onPress = this.props.onPress;
    var isJump = true;

    onPress && (isJump = onPress(route));

    if(this.state.currentRoute !== route || isJump){
      this.setState({
        currentRoute: route
      });
    }
  }

  render(){
    const currentRoute = this.state.currentRoute;
    const  {
      navConfigs,
      headerLeft,
      headerRight,
      underlayColor,
      activeColor,
      unActiveColor,
      headerStyle
    } = this.props;

    console.log(navConfigs,[currentRoute])

    return (
      <View style={ styles.wrap }>
        <NavHeader
          style={ headerStyle }
          headerLeft={ headerLeft || null }
          title={
            navConfigs[currentRoute].title === null?
              false:
              navConfigs[currentRoute].title?
              navConfigs[currentRoute].title:
              navConfigs[currentRoute].label

          }
          headerRight={ headerRight || null }
        />
        <ScrollView style={ styles.content }>

        </ScrollView>
        <View style={ [styles.bottom, { backgroundColor: '#ccc' }] }>
          {(()=>{
            const buttons = [];
            for(let i in navConfigs) {
              // 是否当前路由
              let isCurrentRoute = currentRoute === i;
              let item = navConfigs[i];
              buttons.push(
                <NavButton
                  underlayColor={ underlayColor }
                  key={ i }
                  title={ item.label }
                  style={ styles.button }
                  onPress={ ()=>{this._onPress(i) } }
                    images={
                      item.icon({
                      focused: isCurrentRoute,
                      tintColor: isCurrentRoute? activeColor: unActiveColor
                    })
                  }
                />
              )
            }
            return buttons
          })()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    height: 100,
    backgroundColor: '#999',
  },
  bottom: {
    height: 60,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#fff',
    flex: 1
  },
  buttonImg: {
    height: 24,
    width: 24,
  }
});

class TestConfigProps extends Component{}

TestConfigProps.propsTypes = {
  screen: PropTypes.element,
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  icon: PropTypes.func.isRequired,
  headerLeft: PropTypes.element,
  headerRight: PropTypes.element,
};

TabNav.propTypes = {
  navConfigs: PropTypes.object,
  underlayColor: PropTypes.string,
  activeColor: PropTypes.string,
  unActiveColor: PropTypes.string,
  headerLeft: PropTypes.element,
  headerRight: PropTypes.element,
  onPress: PropTypes.func,
  headerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
};

export default (navConfigs, config)=>{

  // 验证navConfig参数
  for(let i in navConfigs){
    (<TestConfigProps {...navConfigs[i]}/>)
  }

  return class extends Component{
    render() {
      return <TabNav
        {...this.props}
        navConfigs={ navConfigs }
        {...config}
      />
    }
  }
};