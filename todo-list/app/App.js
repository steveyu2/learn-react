import React from 'react';
import css from './App.css';
import {
  Navbar,
  Main,
  Todogroup,
  Todolist,
} from './compoents/compoents';

class App extends React.Component {

      render() {
        return (
          <div className={`${css.wrap}`}>
            <header>
              <Navbar />
            </header>
            <Main>
              <Todogroup/>
              <Todolist/>
            </Main>
            <footer>
              @2017
            </footer>
          </div>
    )
  }
}

export default App