import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoProvider ";
import './form.css'

function Form() {
    const { putTodo } = useContext(TodoContext);
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    putTodo(taskText);
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
    <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add task..."
        className="form-input"
    />
    <button type="submit" className="form-button">Add Task</button>
</form>
  );
}

export default Form;
