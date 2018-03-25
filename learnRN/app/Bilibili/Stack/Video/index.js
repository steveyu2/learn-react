import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import { Header } from 'react-navigation';
import { Config, Images } from '../../config';
import SimplePropTypes from '../../components/g/simple-prop-types';
import Details from './Details';


const HEADER_HEIGHT = Header.HEIGHT + StatusBar.currentHeight;

const styles = StyleSheet.create({
    titleWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height:  HEADER_HEIGHT,
        backgroundColor: 'rgba(0,0,0, 0.05)',
    },
    title: {
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
        opacity: 0
    },
    fixedTitle: {
        marginTop: StatusBar.currentHeight,
        width: Config.mediaWidth * 3/5,
        textAlign: 'center',
        color: '#fff'
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
                <StatusBar translucent={true} backgroundColor="transparent" animated={true}/>
                <HeaderImageScrollView
                    maxHeight={210 + StatusBar.currentHeight}
                    minHeight={ HEADER_HEIGHT }
                    maxOverlayOpacity='1'
                    overlayColor={ screenProps.mainColor }
                    fadeOutForeground={ true }
                    foregroundParallaxRatio={0.2}
                    //顶部标题
                    renderForeground={()=>(
                      <View style={ styles.titleWrap }>
                        <Text numberOfLines={1} style={ styles.title }>{ videoTitle }</Text>
                      </View>
                    )}
                    // 固定标题
                    renderFixedForeground={() => (
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
                    )}
                    // 图片
                    renderHeader={() => (
                      <Image
                        source={ imagesSource }
                        style={{ width: '100%', height: '100%'}}
                      />
                    )}
                >
                    <View style={{ height: Config.mediaHeight - HEADER_HEIGHT }}>
                        <Details
                          screenProps = {{
                            ...screenProps,
                            title: style=>
                              <TriggeringView
                                onHide={() => this.fixedTitle.fadeInUp(200)}
                                onDisplay={() => this.fixedTitle.fadeOutDown(200)}
                              >
                                  <Text style={style}>
                                    {videoTitle}
                                  </Text>
                              </TriggeringView>

                          }}
                        />
                    </View>
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
