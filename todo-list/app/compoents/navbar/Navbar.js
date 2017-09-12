import React from 'react';
import css from './Navbar.css';

class Navbar extends React.Component {

  render() {
    return (
      <div className={`row ${css.hander}`}>
        <div className={`${css.brand}`}>
          待办事项列表
        </div>
      </div>
    )
  }

}

export default Navbar