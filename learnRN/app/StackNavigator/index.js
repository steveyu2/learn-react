import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button } from 'react-native';
import {DrawerNavigator, StackNavigator, TabBarBottom,TabBarTop, TabNavigator } from 'react-navigation';
import MainScreenNavigator from '../MainScreenNavigator';

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with Lucy {params.user}</Text>
      </View>
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat',{ user: 'eee' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

export default SimpleApp;


