### 迁移项目npm i报错 
> 17-12-6 

我重新`clone`项目`npm i`包后，再执行`react-native run-android`,
然后生成的app直接就停止运行了。

*   我执行以前的项目是没有问题的，尝试对比两个的package之后有没有什么不同,结果当然看不出什么
*   然后我怀疑是npm i的时候出的问题，百度之后，我删了node_modules，用yarn执行,也还是各种报错
*   直到修改了`react-native-splash-screen`在`/android`文件夹下的改动才能运行成功