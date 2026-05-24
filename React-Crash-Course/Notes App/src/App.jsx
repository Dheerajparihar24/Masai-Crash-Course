import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos ? JSON.parse(localStorage.getItem("todos")) : [];
  });

  // 1 Load todos when app starts (Runs when app opens)

  //2 Save todos whenever todos changes

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //   This runs whenever:
  // ✅ add task
  // ✅ edit task
  // ✅ delete task
  // ✅ toggle task
  // ✅ clear task

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
