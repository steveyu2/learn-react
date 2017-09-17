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
  name: 'todoList',
  /*
  todoGroupList: [
    // keys: id groupName createTime
  ],
  todoList: [
    // keys: id todoName finish createTime pid
  ],
  */
  /**
   * 获取数据
   */
  getData() {
    var data = localStorage.getItem(this.name);
    if(!data){
      data = JSON.stringify({
        todoGroupList: [{
          id: '1234',
          groupName: '例子',
          createTime: getDate()
        }],
        todoList: [{
          id: '123123',
          todoName: '待办事项',
          createTime: getDate(),
          finish: false,
          pid: '1234'
        }]
      });
    }
    return JSON.parse(data);
  },
  /**
   * 设置数据
   * @param data {obj}
   */
  setData(data) {
    localStorage.setItem(this.name, JSON.stringify(data));
  },
  /**
   * 设置待办事项组数据
   * @param list {array}
   */
  setGroupList(list) {
    this.setData({
      todoGroupList: list,
      todoList: this.getTodoList()
    });
  },
  /**
   * 设置待办事项数据
   * @param list {array}
   */
  setTodoList(list) {
    this.setData({
      todoGroupList: this.getGroupList(),
      todoList: list
    });
  },
  /**
   * 获取待办事项组数据
   */
  getGroupList() {
    return this.getData().todoGroupList;
  },
  /**
   * 获取待办事项数据
   */
  getTodoList() {
    return this.getData().todoList;
  }
};

const methods = {
  /**
   * TodoGroup
   */
  /**
   * 获取单个组的在数据里的下标
   * @param id
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
  /**
   * 获取所有的待办事项组数据
   * @returns {array}
   */
  getGroupList() {
    return data.getGroupList();
  },
  /**
   * 增加一个待办事项组
   * @returns {array}
   */
  addTodoGroup(groupName) {

    var list = data.getGroupList();

    list.push({
      id: UUID(),
      groupName,
      createTime: getDate(),
    });

    data.setGroupList(list);
  },
  /**
   * 删除一个待办事项组
   * @returns {array}
   */
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
  /**
   * 获取一个待办事项
   * @param id {string} 事项id
   * @returns {string} 事项下标
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
  /**
   * 获取所有待办事项
   * @returns {array}
   */
  getAllTodoList() {
    return data.getTodoList();
  },
  /**
   * 获取一个待办事项组的待办事项
   * @param pid {string} 组id
   * @returns {array}
   */
  getTodoList(pid) {

    var list = this.getAllTodoList();

    if(this.getGroup(pid) !== false){
      var result = list.filter((v)=>v.pid === pid);
      return result;
    }

    return false;
  },
  /**
   * 增加一个待办事项
   * @param todoName 事项名称
   * @param pid
   */
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
  /**
   * 删除一个待办事项
   * @param id 事项id
   */
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
    return true;
  },
  /**
   * 完成一个待办事项
   * @param id 事项id
   */
  finishTodo(id) {

    var list = this.getAllTodoList();

    var index = filterOne(list, (v)=>{
      if(v.id === id){
        return true;
      }
    });

    if(index !== false){
      list[index].finish = true;
    }else{
      return false;
    }

    data.setTodoList(list);
    return true;
  },
  /**
   * 取消完成一个待办事项
   * @param id 事项id
   */
  cancelFinishTodo(id) {

    var list = this.getAllTodoList();

    var index = filterOne(list, (v)=>{
      if(v.id === id){
        return true;
      }
    });

    if(index !== false){
      list[index].finish = false
    }else{
      return false;
    }

    data.setTodoList(list);
    return true;
  }
};

export default methods;