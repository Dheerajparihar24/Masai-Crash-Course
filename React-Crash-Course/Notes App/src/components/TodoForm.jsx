import { useState } from "react";

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() === "") return alert("Fill the input..");
    setTodos([...todos, { id: Date.now(), title: todo, isCompleted: false }]);
    setTodo("");
  };

  return (
    <section className="todo--form">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </section>
  );
}
