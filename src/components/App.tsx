import React, {useState, useEffect, useRef, KeyboardEventHandler} from 'react';
import {ITodo} from "../types/data";
import TodoList from "./TodoList";


const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDawn: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') addTodo();
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                completed: false,
            }]);

            setValue('');
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(item => item.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                completed: !todo.completed,
            }
        }))
    }

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, [])

    return (
        <div style={{display: 'flex', width: '90%', flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
            <div>
                <input value={value} onChange={handleChange} onKeyDown={handleKeyDawn} type="text" ref={inputRef}/>
                <button onClick={addTodo}>Add</button>
            </div>

            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default App;