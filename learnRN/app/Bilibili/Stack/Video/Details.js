import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { Header, TabNavigator, TabBarTop } from 'react-navigation';
import { Config, Images } from '../../config';
import Comments from './Comments';
import Synopsis from './Synopsis';
// import SimplePropTypes from '../../components/g/simple-prop-types';


const styles = StyleSheet.create({
    label: {
        fontSize: Config.tabTitleSize,
    },
    indicator: {
        //width: Dimensions.get('window').width/2 - 20,
        //marginLeft: 20,
        //marginRight: 20,
        backgroundColor: Config.mainColor
    },
    tabs: {
        height: Config.TabNavHeight,
        // backgroundColor: 'rgba(0,0,0,0)'
        // backgroundColor: '#fff'
    },
    tab: {
      backgroundColor: '#fff'
    }
});

const Details = TabNavigator({
    TabVideoSynopsis: {
        screen: Synopsis,
        navigationOptions: {
            tabBarLabel: '简介'
        }
    },
    TabVideoComments: {
        screen: Comments,
        navigationOptions: {
            tabBarLabel: '评论',
        }
    }
},{
    tabBarPosition: 'top',
    animationEnabled: true,
    lazy: true,
    // tabBarComponent: class extends Component{
    //     render () {
    //         const {
    //             screenProps,
    //             style
    //             } = this.props;
    //
    //         return <TabBarTop {...this.props} style={[
    //               ]}/>
    //     }
    // },
    tabBarOptions: {
        activeTintColor: Config.mainColor,
        inactiveTintColor: '#000',
        labelStyle: styles.label,
        tabStyle: styles.tabs,
        style: styles.tab,
        indicatorStyle: styles.indicator
    }
});

export default Details;
