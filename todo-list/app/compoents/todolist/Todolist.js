import React from 'react';
import css from './Todolist.css';
import Listheaderinput from './listheaderinput/Listheaderinput';
import Listheader from './listheader/Listheader';
import Listbody from './listbody/Listbody';
import Listtitle from './listtitle/Listtitle';

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
 *   cancelFinishTodo (function)
 *   removeTodo (function)
 */

class Todolist extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showFinish: true,
      showUnFinish: true,
    };

    this.changeShowFinish=this.changeShowFinish.bind(this);
    this.changeShowUnFinish=this.changeShowUnFinish.bind(this);
  }

  changeShowFinish() {
    this.setState({
      showFinish: !this.state.showFinish
    });
  }

  changeShowUnFinish() {
    this.setState({
      showUnFinish: !this.state.showUnFinish
    });
  }

  render() {
    const group = this.props.group;

    return (
      <div className={css.todolist}>
        <div className="panel panel-primary">
          <Listheader name={ group.groupName } time={ group.createTime.string }/>
          <div className="panel-body">
            <Listheaderinput groupId={ group.id }
                        commitTodoName={ this.props.commitTodoName }
                        deleteGroup={ this.props.deleteGroup }/>
            <div className={ css.listMain }>
              <Listtitle title="完成" dropDownClick={ this.changeShowFinish } dropDown={ true }/>
              <div style={{display: this.state.showFinish? 'block': 'none'}}>
                <Listbody finish={ false }
                          todoList={ this.props.todoList }
                          finishTodo={ this.props.finishTodo }
                          removeTodo={ this.props.removeTodo }/>
              </div>
              <Listtitle title="未完成" dropDownClick={ this.changeShowUnFinish } dropDown={ true }/>
              <div style={{display: this.state.showUnFinish? 'block': 'none'}}>
                <Listbody finish={ true }
                          todoList={ this.props.todoList }
                          cancelFinishTodo={ this.props.cancelFinishTodo }
                          removeTodo={ this.props.removeTodo }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Todolist