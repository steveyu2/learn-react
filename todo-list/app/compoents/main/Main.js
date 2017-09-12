import React from 'react';
import css from './Main.css';

class Main extends React.Component {

  render() {
    return (
      <div className={css.main}>
        {this.props.children}
      </div>
    )
  }

}

export default Main