import React from 'react';

class Inputgroup extends React.Component {

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="组名称"/>
        <span className="input-group-btn">
          <button className="btn btn-primary btn-md">
            <i className="glyphicon glyphicon-hand-down"/>
          </button>
        </span>
      </div>
    )
  }

}

export default Inputgroup