import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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
 *    headerLeft {ReactElement} 导航头部左边默认显示的组件，会被navConfigs 的 headerLeft覆盖
 *    headerRight {ReactElement} 导航头部右边默认显示的组件，会被navConfigs 的 headerRight覆盖
 *    onPress {function(routeName)} 路由按下事件 根据return的boolean判断是否跳转路由
 *    underlayColor {string} 点击时的颜色
 *    activeColor {string} 选中的颜色
 *    unActiveColor {string} 未选中的颜色
 *    headerStyle {obj} 头部样式
 *    bottomNavStyle {obj} 底部样式
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

  // 点击改变路由事件
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

  // 当前路由属性
  getCurrentRouteConfig() {
    const currentRoute = this.state.currentRoute;
    const route = this.props.navConfigs[currentRoute];
    var {
      headerLeft,
      headerRight,
    } = this.props;

    // 标题
    var title = null;

    if(route.title !== null){
      title = route.title || route.label;
    }

    //导航左右组件
    if(route.headerLeft !== null){
      headerLeft = route.headerLeft || headerLeft;
    }


    if(route.headerRight !== null){
      headerRight = route.headerRight || headerRight;
    }

    return {
      headerLeft,
      headerRight,
      title
    };
  }

  // 获取路由导航按钮
  getNavButtons() {
    const currentRoute = this.state.currentRoute;
    const  {
      navConfigs,
      headerLeft,
      headerRight,
      underlayColor,
      activeColor,
      unActiveColor,
      labelStyle,
      headerStyle,
      bottomNavStyle
    } = this.props;
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
          titleStyle={ [labelStyle,{ color: isCurrentRoute? activeColor: unActiveColor }] }
          btnStyle={ styles.button }
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
  }

  render(){
    const currentRoute = this.state.currentRoute;
    const  {
      navConfigs,
      titleStyle,
      headerStyle,
      bottomNavStyle
    } = this.props;
    const routeConfig = this.getCurrentRouteConfig();

    return (
      <View style={ styles.wrap }>
        {/* 头部 */}
        <NavHeader
          headerStyle={ headerStyle }
          headerLeft={ routeConfig.headerLeft }
          title={ routeConfig.title }
          titleStyle={ titleStyle }
          headerRight={ routeConfig.headerRight }
        />
        {/* 路由内容 */}
        <ScrollView style={ styles.content }>

        </ScrollView>
        {/* 路由导航 */}
        <View style={ [styles.bottom, bottomNavStyle] }>
          { this.getNavButtons() }
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
    height: 50,
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

// class TestConfigProps extends Component{render(){return <Text/>}}
//
// TestConfigProps.propsTypes = {
//   screen: PropTypes.element,
//   label: PropTypes.string.isRequired,
//   title: PropTypes.string,
//   icon: PropTypes.func.isRequired,
//   headerLeft: PropTypes.element,
//   headerRight: PropTypes.element,
// };

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