import React from 'react';
import css from './App.css';
import {
  Navbar,
  Main,
} from './compoents/compoents';

class App extends React.Component {

      render() {
        return (
          <div className={css.wrap+' '+css.a}>
            <heander>
              <Navbar />
            </heander>
            <Main />
            <footer>
              @2017
            </footer>
          </div>
    )
  }
}

export default App