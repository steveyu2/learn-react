import { Component } from 'react'

export default (props, propName)=>{
  var callback;

  if(typeof props === 'function'){
    callback = props;
    return (props, propName)=>{
      props[propName].prototype instanceof Component? new Error(propName + '必须继承至React.Component'): null;
      callback();
    }
  }
  props[propName].prototype instanceof Component? new Error(propName + '必须继承至React.Component'): null;
}