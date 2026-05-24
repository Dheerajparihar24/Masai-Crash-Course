import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const handleClearTask = () => {
    setTodos([]);
  };

  const handleTodoUpdate = (id, newTitle) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id == id ? { ...todo, title: newTitle } : todo,
      ),
    );
  };

  return (
    <>
      <Navbar />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        handleClearTask={handleClearTask}
        onUpdate={handleTodoUpdate}
      />
    </>
  );
}

export default App;
