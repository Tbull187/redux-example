import React from 'react';

import addTodo from './actions/index';
import Todos from './components/todos';

import logo from './styles/logo.svg';
import './styles/App.css';

const App = () => {

  let inputVal = "";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Powered by Redux:</div>

        <Todos />

      </header>
    </div>
  );
}

export default App;
