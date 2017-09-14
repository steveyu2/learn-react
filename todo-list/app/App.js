import React from 'react';
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
        obj[key][o].bind(that);
      }
    });
  },
  method(key, methodName) {
    var obj = this;
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
          groupList: this.method('todo', 'getList')()
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
          groupList: this.method('group', 'getList')()
        });
      }
    },
    finishTodo(id) {

      const index = TodoListData.getGroup(groupId);

      if(index){
        this.method('group', 'getList')()[index];
      }else{
        swal('失败','待办事项不存在','dangger');
      }
    },
    cancelFinishTodo(id) {

      const index = TodoListData.getGroup(groupId);

      if(index){
        return this.method('group', 'getList')()[index];
      }

      return false;
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
      todoGroups: [

      ],
      todos: [

      ],
      currentGroupId: '' // 当前选中的组id
    };

    TODOLIST.bind(this);
    this.method = TODOLIST.method;
  }

  render() {

    const currentGroup = this.method('group', 'current')();

    return (
      <div className={`${css.wrap}`}>
        <header>
          <Navbar />
        </header>
        <Main>
          <Todogroup groupList={ this.state.todoGroups }
                     commitGroupName={ this.method('group', 'add') }/>
          {
            currentGroup
            &&
            (<Todolist group={ currentGroup }
                       commitTodoName={ this.addTodo }
                       deleteGroup={ this.method('group', 'delete') }
                       finishTodo={ this.finishTodo }
                       cancelFinishTodo={ this.cancelFinishTodo }
                       removeTodo={ this.removeTodo }/>)
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