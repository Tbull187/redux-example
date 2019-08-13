import React from 'react';
import { connect } from 'react-redux';
import { todoList } from '../presentation/todoList';
import { addTodo } from '../../actions/actions';
import PropTypes from 'prop-types';

const Todos = ({ store }) => {
    let inputVal = "";

    return (
        <div className="todos">
            <div className="inputContainer">
                <input
                    placeholder="Enter a todo..."
                    type="text"
                    onChange={(e) => {
                        console.log(e.target.value);
                        inputVal = e.target.value;
                    }}/>
                <input
                    type="button"
                    value="Add"
                    onClick={() => store.dispatch(addTodo(inputVal)) }
                />
            </div>

            <div>{inputVal}</div>

            <button onClick={() => console.log(store.getState())}>Log State</button>
            
            <ul className="todosList">
                {/* {props.store.getState().map(todo => <li key={todo.id}>{todo.text}</li>)} */}
            </ul>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

}

const mapDispatchToProps = (dispatch, ownProps) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
