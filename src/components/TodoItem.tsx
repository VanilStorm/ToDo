import React from 'react';
import {ITodo} from "../types/data";

interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, completed, toggleTodo, removeTodo} = props;

    return (
        <div style={{display: "flex", alignContent: "center"}}>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            <span style={{display: "inline-block", margin: '0 10px'}}>{title}</span>
            <button onClick={() => removeTodo(id)}
                    style={{
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "red",
                    }}
            >X</button>
        </div>
    );
};

export default TodoItem;