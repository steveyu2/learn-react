import React, { Component } from 'react';
import { Drawer, Text, View } from 'native-base';
export default class DrawerExample extends Component {
    render() {
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };
        return (
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<View style={{ height: '120%',width:'50%',backgroundColor:'blue' }}><Text>123</Text></View>}
                    onClose={() => closeDrawer()} >
                    <View style={{ flex: 1 }}>
                            <Text>123123</Text>
                    </View>
                </Drawer>
        );
    }
}