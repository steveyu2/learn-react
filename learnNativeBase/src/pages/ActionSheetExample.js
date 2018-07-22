import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Text } from 'native-base';

export default class  extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs initialPage={0}>
          <Tab heading="Tab1">
            <Container>
              <Content>
                <Text style={{fontSize: 80}}>Tab1</Text>
                <Text style={{fontSize: 80}}>Tab1</Text>
                <Text style={{fontSize: 80}}>Tab1</Text>
                <Text style={{fontSize: 80}}>Tab1</Text>
                <Text style={{fontSize: 80}}>Tab1</Text>
                <Text style={{fontSize: 80}}>Tab1</Text>
                <Text style={{fontSize: 80}}>Tab1</Text>
                <Text style={{fontSize: 80, color: 'red'}}>Tab1</Text>
              </Content>
            </Container>
          </Tab>
          <Tab heading="Tab2">
            <Container>
              <Content>
                <Text style={{fontSize: 80}}>Tab2</Text>
                <Text style={{fontSize: 80}}>Tab2</Text>
                <Text style={{fontSize: 80}}>Tab2</Text>
                <Text style={{fontSize: 80}}>Tab2</Text>
                <Text style={{fontSize: 80}}>Tab2</Text>
                <Text style={{fontSize: 80}}>Tab2</Text>
                <Text style={{fontSize: 80}}>Tab2</Text>
                <Text style={{fontSize: 80, color: 'red'}}>Tab1</Text>
              </Content>
            </Container>
          </Tab>
          <Tab heading="Tab3">
            <Text>Tab3</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}