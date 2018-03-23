import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import SimplePropTypes from '../components/g/simple-prop-types';

class VideoView extends Component{

  componentDidMount() {
    const {
      navigation,
      screenProps
    } = this.props;
    screenProps.fetchSingleVideo(navigation.state.params.video.currentId);
  }

  render() {
    const {
      navigation,
      screenProps
      } = this.props;
    const {
        video
      } = navigation.state.params;

    const data = screenProps.video.details[video.currentId] || {};
 debugger

    return (
      <HeaderImageScrollView
        maxHeight={200}
        minHeight={60}
        overlayColor={ screenProps.mainColor }
        fadeOutForeground={ true }
        renderForeground={()=>(
          <Text style={{ color: '#000' }}>{ video.currentTitle }</Text>
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
            source={{uri: data.imageUrl}}
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

VideoView.propTypes = SimplePropTypes(({ str, strRq, arrOfRq, objOf, shape, shapeRq, funcRq, boolRq })=>({
  screenProps: shapeRq({
    // fetchVideoRecommendToBefore: funcRq,
    // fetchVideoRecommendToAfter: funcRq,
    fetchSingleVideo: funcRq,
    video: shapeRq({
      details: objOf(shape({
        id: strRq,
        loading: boolRq,
        data: shape({
          title: str,
          //videoUrl: strRq,
          imageUrl: str,
          videoTime: str,
          play: str,
          danmu: str,
          type: str
        })
      }))
    }),
    // mainColor: strRq
  }),
  navigation: shapeRq({
    navigate: funcRq,
    state: shapeRq({
      params: shapeRq({
        video: shapeRq({
          currentId: strRq,
          currentTitle: strRq
        })
      })
    })
  })
}))

export default VideoView;
