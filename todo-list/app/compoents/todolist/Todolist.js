import React from 'react';
import css from './Todolist.css';

class Todolist extends React.Component {

  render() {
    return (
      <div className={css.todolist}>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              Panel title
            </h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-4">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="待办事项名称"/>
                  <span className="input-group-btn">
                    <button className="btn btn-primary btn-md">
                      <i className="glyphicon glyphicon-hand-down"/>
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-2">
                <button className="btn btn-danger btn-md">
                  删除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Todolist