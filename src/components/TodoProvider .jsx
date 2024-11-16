import React, { useState, createContext, useCallback } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const putTodo = useCallback((value) => {
    setTodos((prevTodos) =>
      value
        ? [...prevTodos, { id: Date.now(), text: value, done: false }]
        : prevTodos
    );
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <TodoContext.Provider value={{ todos, putTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
