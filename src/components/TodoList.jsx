import React, { useContext } from 'react';
import { TodoContext } from './TodoProvider ';
import ItemTodo from './ItemTodo';

function TodoList() {
    const {todos}=useContext(TodoContext)
    return (
        <ul>
        {todos.map((todo) => (
          <ItemTodo key={todo.id} todo={todo} />
        ))}
      </ul>
    );
}

export default TodoList;