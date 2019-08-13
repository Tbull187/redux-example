import React from 'react';
import addTodo from './actions/actions';
import Todos from './components/container/todos';
import logo from './styles/logo.svg';
import './styles/App.css';


const App = ({ store }) => {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Powered by Redux:</div>

        <Todos store={store}/>

      </header>
    </div>
  );
}

export default App;
