目录

    todo-list
    ├─app                       
    │  ├─compoents              
    │  │  ├─main                
    │  │  ├─navbar              
    │  │  ├─todogroup           
    │  │  │  ├─grouplist        
    │  │  │  └─inputgroup       
    │  │  └─todolist            
    │  │      ├─Listbody        
    │  │      ├─listheader      
    │  │      ├─listheaderinput 
    │  │      └─listtitle       
    │  ├─less 一些通用样式 
    │  ├─App.css
    │  ├─App.js
    │  └─data.js 本地数据的增删查改
    ├─build       
    ├─main.js 入口文件           
    ├─package.json                   
    ├─README.md             
    └─webpack.config.js         

package.json

    {
      "name": "todo-list",
      "version": "1.0.0",
      "description": "",
      "main": "main.js",
      "dependencies": {
        "babel": "^6.23.0",
        "webpack-dev-server": "^2.7.1"
      },
      "devDependencies": {
        "babel": "^6.23.0",
        "babel-core": "^6.26.0",
        "babel-loader": "^7.1.2",
        "babel-preset-es2015": "^6.24.1",
        "babel-preset-latest": "^6.24.1",
        "babel-preset-react": "^6.24.1",
        "css-loader": "^0.28.7",
        "less": "^2.7.2",
        "less-loader": "^4.0.5",
        "react": "^15.6.1",
        "react-dom": "^15.6.1",
        "style-loader": "^0.18.2",
        "sweetalert": "^2.0.3",
        "webpack": "^3.5.6",
        "webpack-dev-server": "^2.7.1"
      },
      "scripts": {
        "start": "webpack-dev-server --inline",
        "build": "webpack"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
