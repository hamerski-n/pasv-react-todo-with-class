import React from "react";
import TodoListItemMovements from "../todo-list-item-movements/todo-list-item-movements";

const TodoListItem = ({item, remove, todoListItemUp}) => {

    return (
            <li key={item.id} className='list-group-item'>
                <TodoListItemMovements item = {item} todoListItemUp={todoListItemUp}/>
                {item.name}
                <button type="button" className='btn btn-danger btn-sm' onClick={() => {remove(item)}}>Delete</button>
            </li>
    );
};

export default TodoListItem;
