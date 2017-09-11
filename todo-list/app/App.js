import React from 'react';
import css from './App.css';
import { Navbar } from './compoents/compoents';

class App extends React.Component {

  render() {
    return (
      <div className={css.warp}>
        <Navbar />
      </div>
    )
  }
}

export default App