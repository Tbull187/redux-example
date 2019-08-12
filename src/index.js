import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import todosReducer from './reducers/todosReducer';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';

// remeber, reducer is a just a function that returns your state
const reducerMock = () => [
    {
        id: 1,
        text: "todod item",
        completed: false
    }
];

const store = createStore(todosReducer);

// TODO: Use <Provider/> and Connect
ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
