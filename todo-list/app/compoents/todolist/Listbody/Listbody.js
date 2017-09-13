import React from 'react';
import css from './Listbody.css';

/**
 *  @props
 *    todoList {obj}
 *      keys
 *        id
 *        todoName
 *        createTime
 *     finishTodo {function(){}} 完成事件
 *      @params
 *        id {string}
 *     unfinishTodo {function(){}} 取消完成事件
 *      @params
 *        id {string}
 *     removeTodo {function(){}} 删除事件
 *      @params
 *        id {string}
 */

class Listbody extends React.Component {

  constructor(props) {
    super(props);

    this.finishTodo = this.finishTodo.bind(this);
    this.unfinishTodo = this.unfinishTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  finishTodo(todoId) {

    this.props.finishTodo(todoId);
  }


  unfinishTodo(todoId) {

    this.props.unfinishTodo(todoId);
  }

  removeTodo(todoId) {

    this.props.removeTodo(todoId);
  }

  render() {

    const todoList = this.props.todoList;
    const todoListEls = todoList.map(todo=>{

      return (
        <li className="list-group-item"  data-toggle="tooltip" data-placement="top" title={ todo.todoName } key={ todo.id }>
          <div className="row">
            <div className="col-md-10">
              <p className={css.listText}>
                { todo.todoName }
              </p>
              <small>{ todo.createTime }</small>
            </div>
            <div className={`col-md-1 ${css.btnGroup}`}>
              <div className="btn-group btn-group-xs" role="group">
                {
                  this.props.finish === true
                    ?(<button type="" className="btn btn-success" onClick={ ()=>{ this.finishTodo(todo.id) } }><i className="glyphicon glyphicon-ok" /></button>)
                    :(<button type="" className="btn btn-info" onClick={ ()=>{ this.unfinishTodo(todo.id) } }><i className="glyphicon glyphicon-mius" /></button>)
                }
                <button type="" className="btn btn-danger"  onClick={ ()=>{ this.removeTodo(todo.id) } }><i className="glyphicon glyphicon-trash" /></button>
              </div>
            </div>
          </div>
        </li>
      )
    })

    return (
      <ul className={`list-group ${css.listBody}`}>
        { todoListEls }
      </ul>
    )
  }

}

export default Listbody