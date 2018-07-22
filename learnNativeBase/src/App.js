import React, { Component } from 'react';
import RN from 'react-native';
import { Container, Header, Content, Tab, Tabs, Text } from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Page from './pages/ActionSheetExample';

export default class TabsExample extends Component {
  render() {
    return (
      <ParallaxScrollView
        backgroundColor="blue"
        contentBackgroundColor="pink"
        parallaxHeaderHeight={300}
        renderForeground={() => (
          <RN.View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <RN.Text>Hello World!</RN.Text>
          </RN.View>
        )}>
          <Page/>
      </ParallaxScrollView>
    );
  }
}