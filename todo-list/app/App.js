import React from 'react';
import css from './App.css';
import {
  Navbar,
  Main,
  Todogroup,
  Todolist,
} from './compoents/compoents';
import TodoListData from './data.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoGroups: [

      ],
      todos: [

      ]
    };
  }

  /**
   * 增加一个待办事项组
   * @param name 组名
   */
  addTodoGroup(name) {

    const groupList = this.state.todoGroups.slice();

    if(!name || name.length == 0){
      swal("错误", "组名不能为空", "dangger");
    }else{
      groupList.push({
        id: UUID(),
        groupName: name,
        todolist: [],
      });

      this.setState({
        groupList: groupList,
        currentGroupId: '' // 当前选中的组id
      });
    }
  }

  /**
   * 根据id获取对应待办事项组
   * @param groupId
   * @return false|obj
   */
  getTodoGroup(groupId) {

    const groupList = this.state.todoGroups;
    var len = groupList.length - 1

    for(; len > -1; len--){
      if(groupList[len].id == groupId){
        return groupList[len];
      }
    }

    return false;
  }

  render() {

    const currentGroup = this.getTodoGroup(this.state.currentGroupId);

    return (
      <div className={`${css.wrap}`}>
        <header>
          <Navbar />
        </header>
        <Main>
          <Todogroup groupList={ this.state.todoGroups }
                     commitGroupName={ this.addTodoGroup }/>
          {
            currentGroup
            &&
            (<Todolist group={ currentGroup }
                       commitTodoName={ this.addTodo }
                       deleteGroup={ this.deleteGroup }
                       finishTodo={ this.finishTodo }
                       unfinishTodo={ this.unfinishTodo }/>)
          }

        </Main>
        <footer>
          @2017
        </footer>
      </div>
    )
  }
}

/**
 * @props
 *  group {obj}
 *   keys
 *    id
 *    groupName
 *    todoList
 *   commitTodoName (function)
 *   deleteGroup (function)
 *   finishTodo (function)
 *   unfinishTodo (function)
 *   removeTodo (function)
 */


export default App