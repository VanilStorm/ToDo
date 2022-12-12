import React from 'react';
import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    items: ITodo[]
}

const TodoList: React.FC<ITodoListProps> = ({items}) => {
    return (
        <div>
            {
                items.map(todo => <TodoItem key={todo.id} {...todo}/>)
            }
        </div>
    );
};

export default TodoList;