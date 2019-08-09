import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import todosReducer from './reducers/todosReducer';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';

const reducer = () => [];

/**
 *   Store
 */
// createStore takes a function (your reducer function to be exact) that returns your actual state
const store = createStore(todosReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
