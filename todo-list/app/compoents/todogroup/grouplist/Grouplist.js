import React from 'react';
import css from './Grouplist.css';

/**
 * @props
 *  groupList {[obj,obj]}
 *   keys
 *    id {string}
 *    todoList {array}
 *    groupName {string}
 *    createTime {obj}
 *    finishSum {int}
 *  activeGroupId {string}
 */

class Grouplist extends React.Component {

  render() {

    const groupList = this.props.groupList;
    const activeId = this.props.activeGroupId;
    const groupListEls = groupList.map(group=>{

      var items = group.todoList;
      var okItemLen = items.filter(v=>v.finish).length;
      var unokItemLen = items.length - okItemLen;

      return (
          <li className={"list-group-item" + group.id === activeId?activeId}
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on left"
              key={group.id}>
            <span className="badge">{ okItemLen }<i className="glyphicon glyphicon-remove" /></span>
            <span className="badge">{ unokItemLen }<i className="glyphicon glyphicon-ok" /></span>
            <p className={ css.listText }>
              { group.groupName }
            </p>
            <small>{ group.createTime.string }</small>
          </li>
      );
    })

    return (
      <ul className={`list-group ${ css.groupList }`}>
        { groupListEls }
      </ul>
    )
  }
}

export default Grouplist