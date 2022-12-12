import React, {useState, useEffect, useRef} from 'react';
import {ITodo} from "../types/data";
import TodoList from "./TodoList";


const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);


    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleAddTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                completed: false,
            }]);

            setValue('');
        }
    }

    return (
        <div>
            <div>
                <input value={value} onChange={handleChange} type="text"/>
                <button onClick={handleAddTodo}>Add</button>
            </div>

            <TodoList items={todos}/>
        </div>
    );
};

export default App;