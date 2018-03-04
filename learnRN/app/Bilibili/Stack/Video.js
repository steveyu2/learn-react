import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

class History extends Component{

  render() {
    const {
      navigation,
      screenProps
      } = this.props;
    const {
        video
      } = navigation.state.params;

    //<Text>{ video.currentShowId }</Text>

    return (
      <HeaderImageScrollView
        maxHeight={200}
        minHeight={60}
        overlayColor={ screenProps.mainColor }
        fadeOutForeground={ true }
        renderForeground={()=>(
          <Text style={{color: '#fff'}}>sadasdasdasd</Text>
        )}

        renderFixedForeground={() => (
          <View style={{
            //backgroundColor: screenProps.mainColor,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
             height: '100%',
             width: '100%'
            }}/>
        )}
        renderHeader={() => (
          <Image
            source={{uri:'http://imgsrc.baidu.com/imgad/pic/item/03087bf40ad162d9ef62aa311adfa9ec8a13cd0b.jpg'}}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      >
        <View style={{ height: 1000 }}>
          <Text>{video.currentShowId}</Text>
        </View>
      </HeaderImageScrollView>
    )
  }
}

export default History;
