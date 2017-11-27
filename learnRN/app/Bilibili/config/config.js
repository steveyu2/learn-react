import { Dimensions } from 'react-native';

var mediaWidth = Dimensions.get('window').width;
var mediaHeight = Dimensions.get('window').height;

// 横屏情况
if(mediaWidth > mediaHeight) {
  mediaWidth = mediaHeight;
  mediaHeight = Dimensions.get('window').width;
}
// 主题
var themes = [
  ['#2196f3', '胖次蓝'],
  ['#f87197', '少女粉'],
  ['#ffc107', '咸蛋黄'],
  ['#8bc34a', '早苗绿']
].map((v)=>({
  color: v[0],
  name: v[1]
}))

export default {
  // 屏幕宽高
  mediaWidth,
  mediaHeight,
  themes,
  mainColor: '#2196f3',// 初始颜色
  underlayColor: 'rgba(0, 0, 0, 0.1)', // #eee
  headerIconUnderlayColor: 'rgba(255, 255, 255, 0.1)',
  iconColor: '#fff',
  fontColor: '#fff',
  TabNavScreenColor: 'rgba(150,150,150, 0.1)',
  TabNavTabColor: '#fff',
  drawerHeaderSmallFontColor: 'rgba(255, 255, 255, 0.8)',
  TabTopUnActivefontColor: 'rgba(255, 255, 255, 0.9)',
  TabBottomUnActivefontColor: 'rgba(120, 120, 120, 0.7)',
  drawerUnderlayColor: 'rgba(225, 225, 225, 1)', // #eee
  drawerNativeUnderlayColor: 'rgba(255, 255, 255, 0.5)', // #eee
  drawerWidth: 280,
  headerHeight: 55,
  TabNavHeight: 41,
  footerHeight: 48,
  TabNavScreenPadding: mediaWidth * 2.2/100,
  drawerFontSize: 13.5,
  drawerHeaderFontSize: 14,
  drawerHeaderSmallFontSize: 12,
  headerTitleSize: 18,
  tabTitleSize: 14,
  bottomNavLabelSize: 10,
};