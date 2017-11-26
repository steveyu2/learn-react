import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, TabBarTop } from "react-navigation";
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import DefaultTabBar from '../../components/DefaultTabBar'
import { Config } from "../../config";
import SpecialColumn from "./SpecialColumn";
import Recommend from "./Recommend";

const styles = StyleSheet.create({
  label: {
    fontSize: Config.tabTitleSize
  },
  indicator: {
    //width: Dimensions.get('window').width/2 - 20,
    //marginLeft: 20,
    //marginRight: 20,
    backgroundColor: Config.fontColor,
  },
  tabs: {
    height: Config.TabNavHeight,
  },
  tab: {
    backgroundColor: Config.mainColor,
  }
});
/*class Home extends Component{

  render() {

    return (
      <ScrollableTabView
        tabBarPosition='top'
        renderTabBar={() => <DefaultTabBar />}>
        <Recommend tabLabel='Tab1' {...this.props}/>
        <SpecialColumn tabLabel='Tab3' {...this.props}/>
      </ScrollableTabView>
    );
  }
}*/

const Home = TabNavigator({
  TabHomeRecommend: {
    screen: Recommend,
     navigationOptions: {
       tabBarLabel: '推荐',
     }
  },
  TabHomeBangumi: {
    screen: SpecialColumn,
     navigationOptions: {
       tabBarLabel: '专栏',
       activeTintColor: '#000'
     }
  },
},{
  tabBarPosition: 'top',
  animationEnabled: true,
  lazy: true,
  tabBarComponent: class extends Component{
    render () {
      const {
        screenProps
        } = this.props;

      return <TabBarTop {...this.props} style={[
        this.props.style,
        {backgroundColor: screenProps.mainColor}
      ]}/>
    }
  },
  tabBarOptions: {
    activeTintColor: Config.fontColor,
    inactiveTintColor: Config.TabTopUnActivefontColor,
    labelStyle: styles.label,
    tabStyle: styles.tabs,
    style: styles.tab,
    indicatorStyle: styles.indicator,
  }
});

export default Home;
// 因为下一级是navigation的组件
// 所以重写下props
/*
export default class extends Component{
  render() {

    const {
      _navigation,
      screenProps
    } = this.props;

    return <Home screenProps={{
      ...screenProps,
      _navigation
    }}/>
  }
};*/
