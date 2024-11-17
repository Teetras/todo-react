import './item.css'; 


function ItemTodo({ todo, onToggle, onDelete }) {
    return (
        <li className="todo-item">
            <input 
                type="checkbox" 
                checked={todo.done} 
                onChange={() => onToggle(todo.id)} 
                className="todo-checkbox"
            />
            <span className={`todo-text ${todo.done ? 'completed' : ''}`}>
                {todo.text}
            </span>
            <button 
                onClick={() => onDelete(todo.id)} 
                className="todo-delete-button"
            >
                Delete
            </button>
        </li>
    );
}

export default ItemTodo;