import React from 'react';
import css from './Grouplist.css';

class Grouplist extends React.Component {

  render() {
    return (
      <ul className={`list-group ${css.grouplist}`}>
        <li className="list-group-item active">
          <span className="badge">4 <i className="glyphicon glyphicon-remove" /></span>
          <span className="badge">14 <i className="glyphicon glyphicon-ok" /></span>
          Cras justo odio Cras justo odio Cras justo odio
          Cras justo odio Cras justo odio Cras justo odio
        </li>
        <li className="list-group-item">
          <span className="badge">4 <i className="glyphicon glyphicon-remove" /></span>
          <span className="badge">14 <i className="glyphicon glyphicon-ok" /></span>
          Cras justo odio
        </li>
        <li className="list-group-item">
          <span className="badge">14</span>
          Cras justo odio
        </li>
      </ul>
    )
  }

}

export default Grouplist