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
    getAllList(){
      return TodoListData.getAllTodoList();
    },
    getList(pid) {

      var result = TodoListData.getTodoList(pid);

      if(result !== false){
        return result;
      }else{
        swal("错误", "该待办事项不存在", "dangger");
      }
    },
    /**
     * 增加一个待办事项
     * @param name 组名
     */
    add(name, pid) {

      if (!name || name.length == 0) {
        swal("错误", "待办事项名称不能为空", "dangger");
      } else {

        TodoListData.addTodo(name, pid);

        this.setState({
          todoList: this.method('todo', 'getAllList')()
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
          todoList: this.method('todo', 'getAllList')()
        });
      }else{

      }
    },
    finish(id) {
      if(TodoListData.finishTodo(id)){
        this.setState({
          todoList: this.method('todo', 'getAllList')()
        });
      }else{
        swal("错误", "完成失败", "dangger");
      }
    },
    cancelFinish(id) {
      if(TodoListData.cancelFinishTodo(id)){
        this.setState({
          todoList: this.method('todo', 'getAllList')()
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

      if(index !== false){
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
    this.changeCurrentGroupId = this.changeCurrentGroupId.bind(this);
    this.method = TODOLIST.method;
  }

  changeCurrentGroupId(groupId) {
    this.setState({
      currentGroupId: groupId
    });
  }

  render() {

    const currentGroup = this.method('group', 'current')();
    const that = this;

    this.state.groupList.forEach((v)=>{

      var result = that.method('todo', 'getList')(v.id);

      if(!result){
        throw new Error('错误');
        return;
      }

      v.finishSum = result.filter((value)=>value.finish).length;
      v.unFinishSum = result.filter((value)=>!value.finish).length;
    });

    return (
      <div className={`${css.wrap}`}>
        <header>
          <Navbar />
        </header>
        <Main>
          <Todogroup groupList={ this.state.groupList }
                     commitGroupName={ this.method('group', 'add') }
                     activeGroupI={ this.props.currentGroupId }
                     groupClickEvent={ this.changeCurrentGroupId }/>
          {
            currentGroup
            &&
            (<Todolist group={ currentGroup }
                       todoList={
                         (()=>{
                           var currentTodolist = that.method('todo', 'getList')(currentGroup.id);

                           if(currentTodolist === false){
                             throw new Error('获取失败');
                             return;
                           }

                           return currentTodolist;
                         })()
                       }
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
