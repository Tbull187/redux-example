import React from 'react';

const Todos = () => {
    return (
        <div className="inputContainer">
            <input
                type="text"
                onChange={(e) => console.log(e)}/>
            <input
                type="button"
                value="Add"
            // onClick={}
            />
        </div>
    )
}

export default Todos;