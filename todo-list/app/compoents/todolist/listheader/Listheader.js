import React from 'react';

/**
 * @props
 *  groupId {string}
 *  commitTodoName {function}
 *    @params
 *      todoName {string}
 *      groupId {string}
 *  deleteGroup {function}
 *    @params
 *      groupId {string}
 */

class Listheaderinput extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      todoName: ''
    };

  }

  render() {
    return (
      <div className="panel-heading">
        <h3 className="panel-title">
          { this.props.name }
        </h3>
        <small>{ this.props.time }</small>
      </div>
    )
  }
}

export default Listheaderinput