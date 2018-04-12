// 简介和评论
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Config, Images } from "../../../config/index";
import CustomButton from '../../../components/g/Button';

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  countText: {
    fontSize: 15,
    color: '#000',
  },
  itemWrap: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 13
  },
  itemAvatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 5,
    marginRight: 15
  },
  itemContent: {
    fontSize: 14,
    color: '#000',
    marginVertical: 8
  },
  itemHeaderWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemHeaderText: { fontSize: 13 },
  buttonGroupWrap: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonItem: {
    height: 16,
    width: 16,
    tintColor: '#888'
  },
  hr: {backgroundColor: '#bbb', height: 0.5,width: '100%'}
});

class CommentView extends Component{
  constructor() {
    super();
    this.comments = JSON.parse(`[["https://i0.hdslb.com/bfs/face/f8ea7fddb6a5bc032128d6ac7641764cc5860185.jpg","LZY竹源","不疼吗","#9","2018-03-11 00:21"],["https://i1.hdslb.com/bfs/face/afca2769b56083e61eb08ce02dff5eb8ba36ae90.jpg@52w_52h.webp","抽象的星期七","我想求歌词……","#8","2018-02-12 17:49"],["https://i1.hdslb.com/bfs/face/aabe3d5243253e006842b600dc9b7516889ae01c.jpg@52w_52h.webp","金拱门客服","真的好听啊！！","#7","2017-11-01 16:52"],["https://i2.hdslb.com/bfs/face/751829d27135391d015654af1d6dc8f390d24aa3.jpg@52w_52h.webp","墨梨喜欢你啊","napom","#6","2017-09-13 13:26"],["https://i1.hdslb.com/bfs/face/701b897afd15d622df505f7629b0686431dfe9a3.jpg@52w_52h.webp","绝伦JTomy","还挺好听","#5","2017-08-27 09:00"],["https://i0.hdslb.com/bfs/face/dfef571a63fe9b4256ac265726248fc23b4efca4.jpg@52w_52h.webp","JayeeSammy","从napom那儿来的哈哈哈","#4","2017-08-23 18:27"],["https://i1.hdslb.com/bfs/face/7943d475cfcb492422625a905864022b67c771b7.jpg@52w_52h.webp","Adam-lambert_","自带电音","#3","2017-08-13 13:02"],["https://i2.hdslb.com/bfs/face/cc3d78f925c1d861c67c7337414c09dbf3b43362.jpg@52w_52h.webp","心和桥的桥","感觉把自己锤哭了一样，哈哈哈","#2","2017-07-31 00:34"],["https://i2.hdslb.com/bfs/face/728caec7e78675753029c20235adcbc3650f3363.jpg@52w_52h.webp","Dustvoxx","***好脆的感觉 怕一下锤碎了 - -","#1","2017-07-04 14:56"]]`).map(v=>({
      avatar: v[0],
      name: v[1],
      orderNum: v[3],
      time: v[4] ,
      content: v[2],
    }));
  }
  render() {
    const {
      mainColor,
      minHeight,
      paddingVal
    } = this.props;

    return (
      <View style={ styles.wrap }>
        <Text style={[ styles.countText, {padding: paddingVal} ]}>评论(4)</Text>
        {
          this.comments.map((v,i)=>(<CommentItem
            key={ i }
            avatar={ v.avatar }
            UserName={ v.name }
            orderNum={ v.orderNum }
            time={ v.time }
            content={ v.content }
            paddingVal={ paddingVal }
          />))
        }
      </View>
    )
  }
}

class CommentItem extends Component{
  render() {
    const {
      avatar,
      UserName,
      orderNum,
      time,
      content,
      paddingVal
    } = this.props;

    return (
      <View>
        <CustomButton nativeUnderlayColor="#ccc">
          <View style={[ styles.itemWrap, {padding: paddingVal} ]}>
            <Image source={{uri: avatar||''}} style={ styles.itemAvatar } />
            <View style={{
              flex: 1,
            }}>
              <View style={ styles.itemHeaderWrap }>
                <Text style={ styles.itemHeaderText }>{ UserName }</Text>
                <Text style={[ styles.itemHeaderText, {marginRight: 5} ]}>{orderNum}    {time}</Text>
              </View>
              <Text style={ styles.itemContent }>{ content }</Text>
              <View style={ styles.buttonGroupWrap }>
                <Image source={ Images.good } style={ styles.buttonItem } />
                <Image source={ Images.good } style={ styles.buttonItem } />
                <Image source={ Images.good } style={[ styles.buttonItem, {transform: [{ scaleY: -1 }]} ]} />
              </View>
            </View>
          </View>
        </CustomButton>
        <View style={ styles.hr } />
      </View>
    )
  }
}

export default CommentView;