import React from 'react';
import swal from 'sweetalert';
import css from './App.css';
import {
  Navbar,
  Main,
  Todogroup,
  Todolist,
} from './compoents/compoents';
import TodoListData from './data.js';

/**
 * model
 */

var TODOLIST = {
  /**
   * 给TODOLIST相应keys里的函数绑定this
   * @param that 函数的this
   */
  bind(that) {
    var obj = this;
    var keys = [
      'todo',
      'group',
    ];

    keys.forEach((key)=>{
      for(let o in obj[key]){
        obj[key][o] = obj[key][o].bind(that);
      }
    });
  },
  method(key, methodName) {
    var obj = TODOLIST;
    return obj[key][methodName];
  },
  todo: {
    getList() {
      return TodoListData.getTodoList();
    },
    /**
     * 增加一个待办事项
     * @param name 组名
     */
    add(name) {

      if (!name || name.length == 0) {
        swal("错误", "待办事项名称不能为空", "dangger");
      } else {

        TodoListData.addTodo(name);

        this.setState({
          todoList: this.method('todo', 'getList')()
        });
      }
    },
    /**
     * 删除一个待办事项
     * @param id 组id
     */
    delete(id) {

      if(TodoListData.removeTodo(id)){
        this.setState({
          todoList: this.method('todo', 'getList')()
        });
      }else{

      }
    }
    ,
    finish(id) {
      if(TodoListData.finishTodo(id)){
        this.setState({
          todoList: this.method('todo', 'getList')()
        });
      }else{
        swal("错误", "完成失败", "dangger");
      }
    },
    cancelFinish(id) {
      if(TodoListData.cancelFinishTodo(id)){
        this.setState({
          todoList: this.method('todo', 'getList')()
        });
      }else{
        swal("错误", "完成失败", "dangger");
      }
    }
  },
  group: {
    getList() {
      return TodoListData.getGroupList();
     },
     /**
     * 增加一个待办事项组
     * @param name 组名
     */
    add(name) {
      if (!name || name.length == 0) {
        swal("错误", "组名称不能为空", "dangger");
      } else {

        TodoListData.addTodoGroup(name);

        this.setState({
          groupList: this.method('group', 'getList')()
        });
      }
    },
    /**
     * 删除一个待办事项组
     * @param id 组id
     */
    delete(id) {
      if(TodoListData.removeTodoGroup(id)){
        this.setState({
          groupList: this.method('group', 'getList')()
        });
      }
    },
    /**
     * 获取当前选中的组
     * @return false|obj
     */
    current() {
      const groupId = this.state.currentGroupId;
      const index = TodoListData.getGroup(groupId);

      if(index){
        return this.method('group', 'getList')()[index];
      }

      return false;
    }
  }
}

/**
 * view
 */

class App extends React.Component {

  constructor(props) {
    super(props);

    this.data = TodoListData;

    this.state = {
      groupList: [

      ],
      todoList: [

      ],
      currentGroupId: '' // 当前选中的组id
    };

    TODOLIST.bind(this);
    this.method = TODOLIST.method;
  }

  render() {

    const currentGroup = this.method('group', 'current')();

console.log(this.state.groupList)
    return (
      <div className={`${css.wrap}`}>
        <header>
          <Navbar />
        </header>
        <Main>
          <Todogroup groupList={ this.state.groupList }
                     commitGroupName={ this.method('group', 'add') }/>
          {
            currentGroup
            &&
            (<Todolist group={ currentGroup }
                       commitTodoName={ this.method('todo', 'add') }
                       deleteGroup={ this.method('group', 'delete') }
                       finishTodo={ this.method('todo', 'finish') }
                       cancelFinishTodo={ this.method('todo', 'cancelFinish') }
                       removeTodo={ this.method('todo', 'delete') }/>)
          }

        </Main>
        <footer>
          @2017
        </footer>
      </div>
    )
  }
}

export default App


/*
grouplist 需要一个 完成总数 和 选中的组id
 *    finishSum {int}
 *  activeGroupId {string}、
 *
 *  完成总数在app.js弄for 赋值上去，
 *
 *
 */