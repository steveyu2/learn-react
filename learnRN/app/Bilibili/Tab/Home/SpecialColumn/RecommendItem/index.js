import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, Dimensions, TouchableHighlight } from 'react-native';
import IconButton from '../../../../components/g/IconButton';
import { Config, Images } from "../../../../config";
import Bottom from "./Bottom";
import RecommendContent from "./RecommendContent";
import UserInfo from "./UserInfo";

class RecommendItem extends Component {

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this._padding = Config.TabNavScreenPadding * 1.3;
  }

  _onPress = () => {};

  render() {

    const {
      data,
      _key,
    } = this.props;

    return (
      <TouchableHighlight
        style={ [styles.item] }
        underlayColor={ "#eee" }
        activeOpacity={ 0.8 }
        onPress={ this._onPress }
        key={_key}
      >
        <View style={styles.wrapper}>
          <UserInfo _padding={ this._padding }
                    avatar={data.faceImg}
                    nikeName={data.nikeName}/>
          <RecommendContent  _padding={ this._padding }
                             title={data.title}
                             cover={data.cover}
                             content={data.info}/>
          <Bottom  _padding={ this._padding }
                   type={data.type}
                   view={data.view}
                   like={data.like}
                   reply={data.reply}
          />
        </View>
      </TouchableHighlight>
    )
  }
}

const mediaWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  item: {
    alignSelf: 'center',
    width: mediaWidth - Config.TabNavScreenPadding * 2,
    marginTop: 15,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    // paddingVertical: Config.TabNavScreenPadding,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'rgba(50,50,50, 0.1)',
    backgroundColor: '#fff',
    // backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderBottomWidth: 2,
  }
});

export default RecommendItem;