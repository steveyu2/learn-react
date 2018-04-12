import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import { Header } from 'react-navigation';
import { Config, Images } from '../../config';
import SimplePropTypes from '../../components/g/simple-prop-types';
import SynopsisAndComments from './SynopsisAndComments/index';

const HEADER_HEIGHT = Header.HEIGHT + StatusBar.currentHeight;
const MAX_HEIGHT= 190 + StatusBar.currentHeight;

const styles = StyleSheet.create({
    titleWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height:  HEADER_HEIGHT,
        // backgroundColor: 'rgba(0,0,0, 0.05)',
    },
    title: {
      // backgroundColor: 'rgba(0,0,0, 0.05)',
        marginTop: StatusBar.currentHeight,
        width: Config.mediaWidth * 3/5,
        textAlign: 'center',
        color: '#fff'
    },
    fixedTitleWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height:  HEADER_HEIGHT,
        opacity: 0,
        zIndex: 10,
    },
    fixedTitle: {
        marginTop: StatusBar.currentHeight,
        width: Config.mediaWidth * 3/5,
        textAlign: 'center',
        color: '#fff'
    },
    fixedTitleBack: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      opacity: 0
    },
    headerImage: {
      height: MAX_HEIGHT,
      width: Config.mediaWidth,
      alignSelf: 'stretch',
      resizeMode: 'cover',
    },
    lowerView: {

    },
    triggeringView: {
    }
});

class VideoView extends Component{

    componentDidMount() {
        const {
            navigation,
            screenProps
            } = this.props;
        // 标题
        this.fixedTitle = null;
        // 标题背景颜色
        this.fixedTitleBack = null;
        // 获取视频信息
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
        // 视频信息
        var data = screenProps.video.details[video.currentId] || {data:{}};
        data = data.data;

        // 图片地址
        const imagesSource = data.imageUrl? {uri: data.imageUrl}: Images.notLoaded;
        const videoTitle = video.currentTitle;

        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={true} backgroundColor="transparent" animated={true} />
                <HeaderImageScrollView
                    style={{flex: 1}}
                    maxHeight={ MAX_HEIGHT }
                    minHeight={ HEADER_HEIGHT }
                    minOverlayOpacity={0.15}
                    fadeOutForeground
                    overlayColor={ '#000' }
                    // foregroundParallaxRatio={1}
                    // 图片
                    renderHeader={() => <Image source={ imagesSource } style={styles.headerImage} />}
                    //顶部随滑动移动的标题
                   renderForeground={()=>(
                       <View style={ styles.titleWrap }>
                         <Text numberOfLines={1} style={ styles.title }>{ videoTitle }</Text>
                       </View>
                     )}
                    // 固定标题
                   renderFixedForeground={() => (
                      <View style={{height: '100%', width: '100%'}}>
                          <Animatable.View
                            style={styles.fixedTitleWrap}
                            ref={view => {
                              this.fixedTitle = view;
                            }}
                          >
                              <Text numberOfLines={1} style={styles.fixedTitle}>
                                { videoTitle }
                              </Text>
                          </Animatable.View>
                          <Animatable.View
                            style={[styles.fixedTitleBack, {backgroundColor: screenProps.mainColor}]}
                            ref={view => {
                              this.fixedTitleBack = view;
                            }}
                          >
                          </Animatable.View>
                      </View>
                    )}
                    contentContainerStyle={ styles.lowerView }
                >
                  <TriggeringView
                    style={ styles.triggeringView }
                    onBeginHidden={() => {this.fixedTitle.fadeInUp(200); this.fixedTitleBack.fadeIn(200)}}
                    onBeginDisplayed={() => {this.fixedTitle.fadeOutDown(70); this.fixedTitleBack.fadeOut(100)}}
                  >
                  </TriggeringView>
                  <SynopsisAndComments
                    mainColor={ screenProps.mainColor }
                    title={ videoTitle }
                    play={ data.play }
                    danmu={ data.danmu }
                    minHeight={ Config.mediaHeight - HEADER_HEIGHT }
                    paddingVal={ Config.TabNavScreenPadding }
                  />
                </HeaderImageScrollView>
            </View>
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
