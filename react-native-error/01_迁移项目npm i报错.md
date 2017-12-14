### 迁移项目npm i报错 
> 17-12-6 

我重新`clone`项目`npm i`包后，再执行`react-native run-android`,
然后生成的app直接就停止运行了。

*   我执行以前的项目是没有问题的，尝试对比两个的package之后有没有什么不同,结果当然看不出什么
*   然后我怀疑是npm i的时候出的问题，百度之后，我删了`node_modules`，用yarn执行,也还是各种报错
*   直到修改了`react-native-splash-screen`在`/android`文件夹下的改动才能运行成功,看起来就是这东西的问题了。。
*   17-12-14
*   经过在`react-native-splash-screen`的issues中寻找，终于找到解决方法...
*   在`/android/app/src/main/res/values`下新建color.xml`当然如果你有的话就不用新建了`
*   添加如下代码，关于颜色值可以自定义
  
        <?xml version="1.0" encoding="utf-8"?>
            <resources> <color name="primary_dark">#00ffffff</color>
        </resources>
        
*   总结尝试的方法
*   删除`node_modules` 用`yarn`重新安装
*   在android下执行`gradlew clean`
*   清除`react-native-splash-screen`在`/android`文件夹下的改动