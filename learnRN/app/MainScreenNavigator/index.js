import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button } from 'react-native';
import { TabNavigator } from "react-navigation";

class RecentChatsScreen extends Component {
  render() {
    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={ () => this.props.navigation.navigate('All', { user: 'Lucy' }) }
          title="GO TO All"
        />
      </View>
    )
  }
}

class AllContactsScreen extends Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export default MainScreenNavigator;