import React, { useContext } from 'react';
import { TodoContext } from './TodoProvider ';
import './item.css'; 

function ItemTodo({ todo }) {
    const { toggleTodo, deleteTodo } = useContext(TodoContext);

    return (
        <li className="todo-item">
            <input 
                type="checkbox" 
                checked={todo.done} 
                onChange={() => toggleTodo(todo.id)} 
                className="todo-checkbox"
            />
            <span className={`todo-text ${todo.done ? 'completed' : ''}`}>
                {todo.text}
            </span>
            <button 
                onClick={() => deleteTodo(todo.id)} 
                className="todo-delete-button"
            >
                Delete
            </button>
        </li>
    );
}

export default ItemTodo;