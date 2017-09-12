import React from 'react';
import css from './Todogroup.css';
import Inputgroup from './inputgroup/Inputgroup';
import Grouplist from './grouplist/Grouplist';

class Todogroup extends React.Component {

  render() {
    return (
      <div className={css.todogroup}>
        <div className={`${css.header} form-group`}>
          <label htmlFor="groupName">创建待办事项组</label>
          <Inputgroup/>
        </div>
        <Grouplist />
      </div>
    )
  }

}

export default Todogroup