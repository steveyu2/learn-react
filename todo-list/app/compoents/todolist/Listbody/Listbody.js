import React from 'react';
import css from './Listbody.css';

class Listbody extends React.Component {

  render() {
    return (
      <ul className={`list-group ${css.listBody}`}>
        <li className="list-group-item"  data-toggle="tooltip" data-placement="top" title="Tooltip on left">
          <div className="row">
            <div className="col-md-10">
              <p className={css.listText}>
                Cras justo odio Cras justo odio Cras justo odio
                Cras justo odio Cras justo odio Cras justo odioasdasd
              </p>
              <small>创建于123123</small>
            </div>
            <div className={`col-md-1 ${css.btnGroup}`}>
              <div className="btn-group btn-group-xs" role="group">
                <button type="" className="btn btn-success"><i className="glyphicon glyphicon-ok" /></button>
                <button type="" className="btn btn-danger"><i className="glyphicon glyphicon-remove" /></button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    )
  }

}

export default Listbody