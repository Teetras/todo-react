import "./App.css";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./components/TodoProvider ";

function App() {

  return (
    <TodoProvider>
    <div className="wrapper">
      <div className="container">
        <h1 className="title">Todo List</h1>
        <Form />
        <TodoList />
      </div>
    </div>
    </TodoProvider>
  );
}

export default App;
