import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Animated, Easing } from 'react-native';
import { addNavigationHelpers } from "react-navigation";
import NavButton from './NavButton';
import NavHeader from '../NormalHeader';
import PropTypes from 'prop-types';

/**
 *  navConfigs {obj}
 *   @key {string} 路由名称
 *   @value {obj} 配置信息
 *     screen {ReactClass} 路由显示组件
 *     label {string} 下面导航路由显示的名称
 *     title {string} 上面显示的标题 null不显示 默认为label
 *     HeaderLeft {ReactClass}导航头部左边显示的组件 null 为不显示
 *     HeaderRight {ReactClass}导航头部右边显示的组件 null 为不显示
 *     icon {function(focused,tintColor)}  图标
 *        focused {boolean} 是否选中
 *        tintColor {string} 选中的颜色
 *  config {obj}
 *    HeaderLeft {ReactClass} 导航头部左边默认显示的组件，会被navConfigs 的 HeaderLeft覆盖
 *    HeaderRight {ReactClass} 导航头部右边默认显示的组件，会被navConfigs 的 HeaderRight覆盖
 *    onPress {function(routeName)} 路由按下事件 根据return的boolean判断是否跳转路由
 *    underlayColor {string} 点击时的颜色
 *    activeColor {string} 选中的颜色
 *    unActiveColor {string} 未选中的颜色
 *    headerStyle {obj} 头部样式
 *    bottomNavStyle {obj} 底部样式
 *    componentProps {function} 返回的对象用作屏幕和组件的props
 */
class TabNav extends Component{

  static defaultProps = {
    componentProps: ()=>({}),
  };

  constructor(props) {
    super(props);
    const routes = [];
    this.routeScreens=[]
    for(let i in this.props.navConfigs){
      routes.push(i);
      this.routeScreens.push(this.props.navConfigs[i].screen)
    }

    this.routes = routes;
    // 当前路由
    this.state={
      fadeAnim: new Animated.Value(1), // 屏幕动效
      currentRoute: routes[0]
    };
  }

  // 点击改变路由事件
  _onPress(route) {
    const onPress = this.props.onPress;
    var isJump = true;

    onPress && (isJump = onPress(route));

    this.state.fadeAnim.setValue(0)
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
      }
    ).start();

    if(this.state.currentRoute !== route && isJump){
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
      HeaderLeft,
      HeaderRight,
    } = this.props;

    // 标题 title为null不显示， title > label > i
    var title = null;

    if(route.title !== null){
      title = route.title || route.label;
      title = title === undefined? currentRoute: title;
    }

    // 导航左右组件
    // navconfig 的 HeaderLeft 为null不显示
    // navconfig[?].HeaderLeft > config.HeaderLeft
    if(route.HeaderLeft !== null){
      HeaderLeft = route.HeaderLeft || HeaderLeft;
    }

    // 同上
    if(route.HeaderRight !== null){
      HeaderRight = route.HeaderRight || HeaderRight;
    }

    return {
      HeaderLeft,
      HeaderRight,
      title,
      screen: route.screen
    };
  }

  // 获取路由导航按钮
  getNavButtons() {
    const currentRoute = this.state.currentRoute;
    const  {
      navConfigs,
      underlayColor,
      activeColor,
      unActiveColor,
      labelStyle,
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
          title={ item.label || i }
          titleStyle={ [labelStyle,{ color: isCurrentRoute? activeColor: unActiveColor }] }
          btnStyle={ styles.button }
          onPress={ ()=>{this._onPress(i) } }
          images={
            item.icon && item.icon({
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
    const {
      navConfigs,
      titleStyle,
      headerStyle,
      bottomNavStyle,
    } = this.props;

    /*
      考虑到有一些是父级传入的props,
      并需要传入到screen或header上的左右组件的props里，
      这里通过componentProps过滤出来然后传到屏幕或头部导航左右组件里,
      这样可以在组件里调用这些prop
     */
    const componentProps = this.props.componentProps(this.props);
    const {
      title,
      HeaderLeft,
      HeaderRight,
    } = this.getCurrentRouteConfig();
    // const Screen = routeConfig.screen;
    const ScreenNum = this.routes.indexOf(currentRoute);


    return (
        <View style={ styles.wrap }>
          {/* 头部 */}
          <NavHeader
            headerStyle={ headerStyle }
            title={ title }
            titleStyle={ titleStyle }
            HeaderLeft={ HeaderLeft? <HeaderLeft {...componentProps}/>: null }
            HeaderRight={ HeaderRight? <HeaderRight {...componentProps}/>: null }
          />
          {/* 路由内容 */}
          <Animated.View style={[
            styles.content,
            {width: this.routes.length*100+'%',marginLeft: ScreenNum*-100+'%'},
            {opacity: this.state.fadeAnim},
            ]}>
              {
                this.routeScreens.map((V,i)=>{
                  return <V {...componentProps} key={i}/>
                })
              }
          </Animated.View>
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
  },
  content: {
    flex: 1,
   flexDirection: 'row',
    //justifyContent: 'center',
    backgroundColor: '#fff',
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
//   HeaderLeft: PropTypes.element,
//   HeaderRight: PropTypes.element,
// };

TabNav.propTypes = {
  navConfigs: PropTypes.object,
  underlayColor: PropTypes.string,
  activeColor: PropTypes.string,
  unActiveColor: PropTypes.string,
  onPress: PropTypes.func,
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