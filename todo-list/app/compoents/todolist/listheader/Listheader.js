import React from 'react';

/**
 * @props
 *  groupId {string}
 *  commitTodoName {function}
 *    @params
 *      todoName {string}
 *  deleteGroup {function}
 *    @params
 *      groupId {string}
 */

class Listheader extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      todoName: ''
    };

    this.setTodoName = this.setTodoName.bind(this);
    this.commitTodoName = this.commitTodoName.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  setTodoName(event) {

    this.setState({
      todoName: event.target.value
    });
  }

  commitTodoName() {
    this.props.commitTodoName(this.state.todoName);
  }

  deleteGroup() {
    this.props.deleteGroup(this.props.groupId);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="待办事项名称" value={this.state.todoName} onChange={this.setTodoName}/>
            <span className="input-group-btn">
              <button className="btn btn-primary btn-md" onClick={this.commitTodoName}>
                <i className="glyphicon glyphicon-hand-down"/>
              </button>
            </span>
          </div>
        </div>
        <div className="col-md-7">
        </div>
        <div className="col-md-1">
          <button className="btn btn-danger btn-sm" onClick={this.deleteGroup}>
            删除
          </button>
        </div>
      </div>
    )
  }
}

export default Listheader