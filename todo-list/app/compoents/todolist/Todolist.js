import React from 'react';
import css from './Todolist.css';
import Listheader from './listheader/Listheader';
import Listbody from './listbody/Listbody';

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

class Todolist extends React.Component {

  render() {
    const group = this.props.group;

    return (
      <div className={css.todolist}>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              { group.groupName }
            </h3>
            <small>{ group.createTime }</small>
          </div>
          <div className="panel-body">
            <Listheader groupId={ group.id }
                        commitTodoName={ this.props.commitTodoName }
                        deleteGroup={ this.props.deleteGroup }/>
            <Listbody todoList={ group.todoList }
                      finishTodo={ this.props.finishTodo }
                      unfinishTodo={ this.props.unfinishTodo }
                      removeTodo={ this.props.removeTodo }/>
          </div>
        </div>
      </div>
    )
  }

}

export default Todolist