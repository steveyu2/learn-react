import React from 'react';
import css from './Todolist.css';
import Listheader from './listheader/Listheader';
import Listbody from './listbody/Listbody';

class Todolist extends React.Component {

  render() {
    return (
      <div className={css.todolist}>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              Panel title
            </h3>
            <small>创建于123123</small>
          </div>
          <div className="panel-body">
            <Listheader />
            <Listbody />
          </div>
        </div>
      </div>
    )
  }

}

export default Todolist