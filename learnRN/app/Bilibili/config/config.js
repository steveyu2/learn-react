import { Dimensions } from 'react-native';

const mediaWidth = Dimensions.get('window').width;

export default {
  mainColor: '#1E90FF',//0099FF
  underlayColor: 'rgba(0, 0, 0, 0.1)', // #eee
  headerIconUnderlayColor: 'rgba(255, 255, 255, 0.1)',
  iconColor: '#fff',
  fontColor: '#fff',
  TabNavScreenColor: 'rgba(150,150,150, 0.1)',
  TabNavTabColor: '#fff',
  drawerHeaderSmallFontColor: 'rgba(255, 255, 255, 0.8)',
  TabUnActivefontColor: 'rgba(255, 255, 255, 0.9)',
  drawerUnderlayColor: 'rgba(225, 225, 225, 1)', // #eee
  unActiveColor: '#999',
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