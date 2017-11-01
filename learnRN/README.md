
介绍

仿照bilibili客户端制作的react-native半成品demo（大部分页面是空的）。

导航用的是react-navigation

APK

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