import React, { useContext } from 'react';
import { TodoContext } from './TodoProvider ';
import ItemTodo from './ItemTodo';

function TodoList() {
    const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

    return (
        <ul>
            {todos.map((todo) => (
                <ItemTodo 
                    key={todo.id} 
                    todo={todo} 
                    onToggle={toggleTodo} 
                    onDelete={deleteTodo} 
                />
            ))}
        </ul>
    );
}

export default TodoList;