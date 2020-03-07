import React from "react";

const TodoListItemMovements = ({item, todoListItemUp}) => {

    return (
        <div className="btn-group-vertical">
            <button onClick={() => {
                todoListItemUp(item)
            }}
                    disabled={item.isDisabledUp}
                    type="button" className='btn btn-primary btn-sm mb-1 align-content-center'>Up
            </button>
            <button disabled={item.isDisabledDown}
                type="button" className='btn  btn-dark btn-sm mb-1 align-content-center align'>Down</button>
        </div>
    );
};

export default TodoListItemMovements;
