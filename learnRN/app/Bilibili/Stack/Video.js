import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import SimplePropTypes from '../components/g/simple-prop-types';

class VideoView extends Component{

  render() {
    const {
      navigation,
      screenProps
      } = this.props;
    const {
        video
      } = navigation.state.params;



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
            source={{uri: 'http://imgsrc.baidu.com/imgad/pic/item/03087bf40ad162d9ef62aa311adfa9ec8a13cd0b.jpg'}}
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

VideoView.propTypes = SimplePropTypes(({ strRq, arrOfRq, shape, shapeRq, funcRq })=>({
  screenProps: shapeRq({
    fetchVideoRecommendToBefore: funcRq,
    fetchVideoRecommendToAfter: funcRq,
    video: shapeRq({
      details: arrOfRq(shape({
        id: strRq,
        loading: boolRq,
        data: shape({
          title: strRq,
          //videoUrl: strRq,
          imageUrl: strRq,
          videoTime: strRq,
          play: strRq,
          danmu: strRq,
          type: strRq
        })
      }))
    }),
    navigation: shapeRq({
      navigate: funcRq,
      state: shapeRq({
        params: shapeRq({
          currentId: strRq,
          currentTitle: strRq,
        })
      })
    }),
    mainColor: strRq
  })
}))

export default VideoView;
