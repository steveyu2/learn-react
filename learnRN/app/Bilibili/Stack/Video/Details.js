import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import { Header, TabNavigator, TabBarTop } from 'react-navigation';
import { Config, Images } from '../../config';
import Comments from './Comments';
import Synopsis from './Synopsis';
import SimplePropTypes from '../../components/g/simple-prop-types';


const styles = StyleSheet.create({
    label: {
        fontSize: Config.tabTitleSize
    },
    indicator: {
        //width: Dimensions.get('window').width/2 - 20,
        //marginLeft: 20,
        //marginRight: 20,
        backgroundColor: Config.fontColor
    },
    tabs: {
        height: Config.TabNavHeight
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
            activeTintColor: '#000'
        }
    }
},{
    tabBarPosition: 'top',
    animationEnabled: true,
    lazy: true,
    tabBarComponent: class extends Component{
        render () {
            const {
                screenProps,
                style
                } = this.props;

            return <TabBarTop {...this.props} style={[
                  ]}/>
        }
    },
    tabBarOptions: {
        activeTintColor: Config.fontColor,
        inactiveTintColor: Config.TabTopUnActivefontColor,
        labelStyle: styles.label,
        tabStyle: styles.tabs,
        style: styles.tab,
        indicatorStyle: styles.indicator
    }
});

export default Details;
