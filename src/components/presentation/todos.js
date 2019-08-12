import React from 'react';
import PropTypes from 'prop-types';
import { addTodo } from '../../actions/actions';

const Todos = ({store}) => {
    let inputVal = "";

    console.log("todo, store?", store)

    return (
        <div className="todos">
            <div className="inputContainer">
                <input
                    placeholder="Enter a todo..."
                    type="text"
                    onChange={(e) => console.log(e)}/>
                <input
                    type="button"
                    value="Add"
                    onClick={() => store.dispatch(addTodo("texty-text")) }
                />
            </div>
            <button onClick={() => console.log(store.getState())}>Log State</button>
            <ul className="todosList">
                {/* {props.store.getState().map(todo => <li key={todo.id}>{todo.text}</li>)} */}
            </ul>
        </div>
    )
}

// Todos.propTypes = {
//     store: PropTypes.array.isRequired
// }

export default Todos;