import React from 'react';

/**
 * @props
 *  commitGroupName {function}
 *    @params
 *      groupName {string}
 */

class Inputgroup extends React.Component {

  constructor(props) {

    super(props);
    this.state = {groupName: ''};

    this.setGroupName = this.setGroupName.bind(this);
    this.commitGroupName = this.commitGroupName.bind(this);
  }

  setGroupName (event) {

    this.setState({
      groupName: event.target.value
    });
  }

  commitGroupName (){

    const name = this.state.groupName;

    this.props.commitGroupName(name);
  }

  render() {

    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="组名称" value={this.state.groupName} onChange={this.setGroupName} />
        <span className="input-group-btn">
          <button className="btn btn-primary btn-md" onClick={this.commitGroupName}>
            <i className="glyphicon glyphicon-hand-down"/>
          </button>
        </span>
      </div>
    )
  }
}

export default Inputgroup