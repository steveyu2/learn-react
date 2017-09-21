import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

export default class HomePage extends Component {
  render() {
    return (
      <View>
        <Text>首页</Text>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item} key={item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}  key={section.title}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});