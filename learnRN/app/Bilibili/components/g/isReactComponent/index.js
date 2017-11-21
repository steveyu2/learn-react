import { Component } from 'react'

export default (props, propName)=>{
  var callback;

  if(typeof props === 'function'){
    callback = props;
    return (props, propName)=>{
      if(props[propName]){
        props[propName].prototype instanceof Component? new Error(propName + '必须继承至React.Component'): null;
      }
      callback();
    }
  }else if(props[propName]){
    props[propName].prototype instanceof Component? new Error(propName + '必须继承至React.Component'): null;
  }
}