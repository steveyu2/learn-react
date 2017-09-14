import React from 'react';
import css from './Todogroup.css';
import Inputgroup from './inputgroup/Inputgroup';
import Grouplist from './grouplist/Grouplist';



/**
 * @props
 *  groupList {array}
 *  commitGroupName {function}
 *    @params
 *      groupName {string}
 */

class Todogroup extends React.Component {

  constructor(props) {

    super(props);
    this.commitGroupName = this.commitGroupName.bind(this);
  }

  commitGroupName(groupName) {

    this.props.commitGroupName(groupName);
  }

  render() {

    return (
      <div className={css.todoGroup}>
        <div className={`${css.header} form-group`}>
          <label htmlFor="groupName">创建待办事项组</label>
          <Inputgroup commitGroupName={this.commitGroupName}/>
        </div>
        <Grouplist groupList={this.props.groupList}/>
      </div>
    )
  }
}

export default Todogroup