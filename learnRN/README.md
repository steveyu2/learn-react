
介绍

仿照bilibili客户端制作的react-native半成品demo（大部分页面是空的）。

导航用的是react-navigation

数据是假数据

支持android 4.4 5.1 (其他没试过)

效果图


完成项
 
 - [x] 完成导航嵌套 Stack -> Drawer -> Tab
 - [x] 封装FlatList 上下拉加载
 - [x] 加入redux
 - [x] 判断网络状态 (fetch函数 catch不到的错误 reject等情况) 
 - [x] 启动页 
 - [x] 切换主题
 - [ ] 引入react-native-image-header-scroll-view 折叠导航

APK下载

   [v1.3](https://qw110946.github.io/learn-react/learnRN/apk/bilibili-v1.3.apk) (之前数据都是本地的，1.3之后都放在ftp上了,当然数据还是静态的 orz)
   
   [v1.2](https://qw110946.github.io/learn-react/learnRN/apk/bilibili-v1.2.apk)
   
   [v1.1](https://qw110946.github.io/learn-react/learnRN/apk/bilibili-v1.1.apk)

learnRN/app/bilibili  项目文件夹

    ├─components 组件
    │  └─g   自己实现的公用组件
    │      ├─FadeInView 
    │      ├─FlatList 封装了FlatList的上拉下拉加载
    │      ├─IconButton 
    │      ├─NormalHeader 
    │      ├─TabAvatarIcon 
    │      ├─TabNav 类似TabNavigator的导航 主要因为TabNavigator不满足我需要的效果，就写了个
    │      └─TwinkleText 透明度1-0-1闪烁的文字，用在上拉加载的文字
    ├─config 配置 颜色之类全局属性
    ├─data 静态数据
    ├─Drawer 抽屉二级导航
    ├─Stack 一级导航
    └─Tab 抽屉导航的首页 三级导航
        ├─Dynamic
        └─Home
    
package.json
    
      "dependencies": {
        "prop-types": "^15.6.0", // 类型检测
        "react": "16.0.0-alpha.12",
        "react-native": "0.48.3",
        "react-native-orientation": "^3.1.0", //  控制屏幕旋转
        "react-native-swiper": "^1.5.13", // 轮播图
        "react-navigation": "^1.0.0-beta.11", // 导航
        "react-redux": "^5.0.6", 
        "redux": "^3.7.2", // 状态管理
        "redux-thunk": "^2.2.0" 
      },
      "devDependencies": {
        "babel-jest": "21.0.2",
        "babel-preset-react-native": "4.0.0",
        "jest": "21.1.0",
        "react-test-renderer": "16.0.0-alpha.12"