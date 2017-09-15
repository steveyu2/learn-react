/**
 * TodoList
 */

// tools

function UUID() {
  function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function getDate() {
  var data = new Date();
  var
    n = data.getFullYear(),
    y = data.getMonth() + 1,
    r = data.getDate(),
    s = data.getHours(),
    f = data.getMinutes(),
    m = data.getSeconds(),
    hm = data.getMilliseconds();

  return {
    n: n, y: y, r: r, s: s, f: f, m: m, hm: hm,
    string: '' + n + '-' + y + '-' + r + ' ' + s + ':' + f + ':' + m
  };
}

// 过滤数组只要过滤了一个就返回下标
function filterOne(arr, callback) {
  if(arr && arr.length){
    for(var len = arr.length-1; len>-1; len--){
      if(callback(arr[len], len, arr) === true){
        return len;
      }
    }
  }
  return false;
}

// code

const data = {
  todoGroupList: [
    // keys: id groupName createTime
  ],
  todoList: [
    // keys: id todoName finish createTime pid
  ],
  setGroupList(list) {
    data.todoGroupList = list.slice();
  },
  setTodoList(list) {
    data.todoList = list.slice();
  },
  getGroupList() {
    return data.todoGroupList;
  },
  getTodoList() {
    return data.todoList;
  },
};

const methods = {
  init () {

  },
  /**
   * TodoGroup
   */
  getGroup(id) {

    var list = data.getGroupList();

    var index = filterOne(list, (v)=>{
      if(v.id === id){
        return true;
      }
    });

    return index;
  },
  getGroupList() {
    return data.getGroupList();
  },
  addTodoGroup(groupName) {

    var list = data.getGroupList();

    list.push({
      id: UUID(),
      groupName,
      createTime: getDate(),
    });

    data.setGroupList(list);
  },
  removeTodoGroup(id) {

    var list = data.getGroupList();

    var index = filterOne(list, (v)=>{
      if(v.id === id){
        return true;
      }
    });

    if(index !== false){
      list.splice(index, 1);
      data.setGroupList(list);
      return true;
    }else{
      return false;
    }
  },
  /**
   * Todo
   */
  getTodo(id) {

    var list = data.getTodoList();
    var index = filterOne(list, (v)=>{
      if(v.id === id){
        return true;
      }
    });

    return index;
  },
  getAllTodoList() {
    return data.getTodoList();
  },
  getTodoList(pid) {

    var list = this.getAllTodoList();

    if(this.getGroup(pid) !== false){
      var result = list.filter((v)=>v.pid === pid);
      return result;
    }

    return false;
  },
  addTodo(todoName, pid) {

    var list = this.getAllTodoList();

    list.push({
      id: UUID(),
      todoName,
      finish: false,
      createTime: getDate(),
      pid,
    });

    data.setTodoList(list);
  },
  removeTodo(id) {

    var list = this.getAllTodoList();

    var index = filterOne(list, (v)=>{
      if(v.id === id){
        return true;
      }
    });

    if(index !== false){
      list.splice(index, 1);
    }else{
      return false;
    }

    data.setTodoList(list);
  },
  finishTodo(id) {

    var list = this.getAllTodoList();

    var index = filterOne(list, (v)=>{
      if(v.id === id){
        return true;
      }
    });

    if(index !== false){
      list[index].state = true;
    }else{
      return false;
    }

    data.setTodoList(list);
  },
  cancelFinishTodo(id) {

    var list = this.getAllTodoList();

    var index = filterOne(list, (v)=>{
      if(v.id === id){
        return true;
      }
    });

    if(index !== false){
      list[index].state = false
    }else{
      return false;
    }

    data.setTodoList(list);
  }
};

export default methods;