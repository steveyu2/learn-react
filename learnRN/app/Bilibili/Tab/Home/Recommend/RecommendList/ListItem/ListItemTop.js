import React, { PureComponent  } from 'react';
import { SectionList, StyleSheet, Text, View, Image } from 'react-native';
import { Config, Images } from "../../../../../config";
import SimplePropTypes from "../../../../../components/g/simple-prop-types"

class InfoItem extends PureComponent {
  render() {
    const {
      title,
      style,
      icon
    } = this.props;

    return (
      <View style={ style }>
        <Image
          source={ icon }
          style={ styles.infoIcon }
        />
        <Text style={ styles.info_text }>{ title }</Text>
      </View>
    )
  }
}

class ListItemTop extends PureComponent {

  static defaultProps = {
    imageStyle: {}
  }

  render() {

    var {
      imageStyle,
      source,
      play,
      danmu,
      videoTime,
      imageHeight,
    } = this.props;

    const mediaWidth = Config.mediaWidth;
    const minSize = mediaWidth < 400;
    play = play.length >= 5&&minSize? ' - -': play;
    danmu = danmu.length >= 5&&minSize? ' - -': danmu;

    // cover contain stretch repeat center
    return (
      <View style={ styles.wrap }>
        {/*本来想用ImageBackGround的设置了圆角没反应就不用了*/}
        <Image
          source={ source }
          style={ [imageStyle, { height: imageHeight + infoHeight }] }
          resizeMode='cover' />
        <View style={[ styles.info, {top: imageHeight} ]}>
            <View style={ styles.infoLeft }>
              <InfoItem
                icon={ Images.player }
                style={ styles.infoItem }
                title={ play }
              />
              <InfoItem
                icon={ Images.danmu }
                style={ styles.infoItem }
                title={ danmu }
              />
            </View>
            <View style={ styles.infoRight }>
              <Text style={ styles.infoRight_text }>{ videoTime }</Text>
            </View>
        </View>
      </View>
    )
  }
}

const infoHeight = 23;
const styles = StyleSheet.create({
  wrap: {
    // alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
  info: {
    paddingHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //flex: 0.5,
    width: '100%',
    height: infoHeight,
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    //top: 20
  },
  // infoLeft
  infoLeft: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoItem: {
    height: '100%',
    marginLeft: 5,
    borderWidth:0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    height: 18,
    width: 18,
    tintColor: '#fff'
  },
  info_text: {
    color: '#fff',
    fontSize: 11,
    marginLeft: 2
  },
  // infoRight
  infoRight: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoRight_text: {
    color: '#fff',
    fontSize: 11,
    marginRight: 5
  },
});

ListItemTop.propTypes = SimplePropTypes(({ strRq, numRq, anyRq })=>({
  source: anyRq,
  play: strRq,
  danmu: strRq,
  videoTime: strRq,
  imageHeight: numRq
}))

export default ListItemTop;