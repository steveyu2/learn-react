import React, { Component } from 'react';
import { Container, Header, Button, Icon, Fab } from 'native-base';
import { createAnimatableComponent, View } from 'react-native-animatable';

export default class FABExample extends Component {
  constructor() {
    super();

    this.state = {
      active: false
    };
  }
  render() {
    return (
      <Container>
        <Header />
        <View style={{ flex: 1 }}>
          <Fab
            active={ this.state.active }
            direction="left"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
              <Button>
                <View animation="tada"  style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 50,
                  alignItems: 'center',
                  backgroundColor: '#34A34F' }} delay={1000}>
                  <Icon name="logo-whatsapp" />
                </View>
              </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}