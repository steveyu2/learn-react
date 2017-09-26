import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import NavButton from './NavButton';

/**
 * @props
 *  navConfigs {obj}
 *   @key {string} 路由名称
 *   @value {obj} 配置信息
 *     label {string} 路由显示的名称
 *     icon {ReactComponent}  图标
 *  config {obj}
 *    underlayColor {string} 点击时的颜色
 *    activeColor {string} 选中的颜色
 *    unActiveColor {string} 未选中的颜色
 */
class TabNav extends Component{

  constructor(props) {
    super(props);
    const routes = [];

    for(let i in this.props.navConfig){
      routes.push(i);
    }

    // 当前路由
    this.state={
      currentRoute: routes[0]
    };
  }

  // 点击改变路由
  _onPress(route) {
    this.setState({
      currentRoute: route
    });
  }

  render(){
    const {navConfigs, config} = this.props;
    console.log(this.props)
    const  {
      underlayColor,
      activeColor,
      unActiveColor,
    } = config;

    return (
      <View style={ styles.wrap }>
        <View style={ styles.header }>

        </View>
        <ScrollView style={ styles.content }>

        </ScrollView>
        <View style={ [styles.bottom, { backgroundColor: '#ccc' }] }>
          {(()=>{
            const buttons = [];
            for(let i in navConfigs) {
              // 是否当前路由
              let isCurrentRoute = this.state.currentRoute === i;
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
  header: {
    height: 60,
    backgroundColor: '#aaa'
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

export default (navConfigs, config)=>{
  return class extends Component{
    render() {
      return <TabNav
        {...this.props}
        navConfigs={ navConfigs }
        config={ config }
      />
    }
  }
};