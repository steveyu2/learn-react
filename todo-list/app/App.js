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
      return this.data.getAllTodoList();
    },
    getList(pid) {

      var result = this.data.getTodoList(pid);

      if(result !== false){
        return result;
      }else{
        swal("错误", "该待办事项不存在", "error");
      }
    },
    /**
     * 增加一个待办事项
     * @param name 组名
     * @param pid 所属组id
     */
    add(name, pid) {

      if (!name || name.length == 0) {
        swal("错误", "待办事项名称不能为空", "error");
      } else {

        TodoListData.addTodo(name, pid);

        this.setState({
          todoList: this.method('todo', 'getAllList')()
        });
      }
    },
    /**
     * 删除一个待办事项
     * @param id 事项id
     */
    delete(id) {

      swal({
        title: "确定删除吗?",
        text: "删除之后不可以恢复哦！",
        icon: "warning",
        buttons: {
          no: {
            text: '取消',
            value: false
          },
          yes: {
            text: '确定',
            value: true
          }
        }
      }).then((willDelete) => {

        if (willDelete) {

          if(this.data.removeTodo(id)){
            this.setState({
              todoList: this.method('todo', 'getAllList')()
            });
          }else{
            swal('错误', '删除失败', 'error');
          }
        }
      });
    },
    /**
     * 删除一个待办事项
     * @param id 组id
     */
    finish(id) {
      if(this.data.finishTodo(id)){
        this.setState({
          todoList: this.method('todo', 'getAllList')()
        });
      }else{
        swal("错误", "完成失败", "error");
      }
    },
    cancelFinish(id) {
      if(this.data.cancelFinishTodo(id)){
        this.setState({
          todoList: this.method('todo', 'getAllList')()
        });
      }else{
        swal("错误", "完成失败", "error");
      }
    }
  },
  group: {
    getList() {
      return this.data.getGroupList();
     },
     /**
     * 增加一个待办事项组
     * @param name 组名
     */
    add(name) {
      if (!name || name.length == 0) {
        swal("错误", "组名称不能为空", "error");
      } else {

        this.data.addTodoGroup(name);

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
      swal({
        title: "确定删除吗?",
        text: "删除之后不可以恢复哦！",
        icon: "warning",
        buttons: {
          no: {
            text: '取消',
            value: false
          },
          yes: {
            text: '确定',
            value: true
          }
        }
      }).then((willDelete) => {

        if (willDelete) {

          if(this.data.removeTodoGroup(id)){

            this.setState({
              groupList: this.method('group', 'getList')()
            });
          }else{
            swal('错误', '删除失败', 'error');
          }
        }
      });
    },
    /**
     * 获取当前选中的组
     * @return false|obj
     */
    current() {
      const groupId = this.state.currentGroupId;
      const index = this.data.getGroup(groupId);

      if(index !== false){
        return this.method('group', 'getList')()[index];
      }

      return false;
    }
  }
};

/**
 * view
 */

class App extends React.Component {

  constructor(props) {
    super(props);

    this.data = TodoListData;
    TODOLIST.bind(this);
    this.method = TODOLIST.method;

    this.state = {
      groupList: this.method('group', 'getList')(),
      todoList: this.method('todo', 'getAllList')(),
      currentGroupId: '' // 当前选中的组id
    };

    this.changeCurrentGroupId = this.changeCurrentGroupId.bind(this);
  }

  changeCurrentGroupId(groupId) {
    this.setState({
      currentGroupId: groupId
    });
  }

  render() {

    const currentGroup = this.method('group', 'current')();
    const that = this;
    var currentTodolist;

    // 计算当前组的完成，未完成数量
    this.state.groupList.forEach((v)=>{

      var result = that.method('todo', 'getList')(v.id);

      if(!result){
        throw new Error('错误');
        return;
      }

      v.finishSum = result.filter((value)=>value.finish).length;
      v.unFinishSum = result.filter((value)=>!value.finish).length;
    });

    // 获取当前组的todoList
    if(currentGroup){

      currentTodolist = that.method('todo', 'getList')(currentGroup.id);

      if(currentTodolist === false){
        throw new Error('获取失败');
        return;
      }
    }

    return (
      <div className={`${css.wrap}`}>
        <header>
          <Navbar />
        </header>
        <Main>
          <Todogroup groupList={ this.state.groupList }
                     commitGroupName={ this.method('group', 'add') }
                     activeGroupId={ this.state.currentGroupId }
                     groupClickEvent={ this.changeCurrentGroupId }/>
          {
            currentGroup
            &&
            (<Todolist group={ currentGroup }
                       todoList={ currentTodolist }
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
* 当前选中组的id也存到本地去
*
* */