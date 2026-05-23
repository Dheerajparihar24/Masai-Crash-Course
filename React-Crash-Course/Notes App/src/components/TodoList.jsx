import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleDelete, handleToggle }) {
  if (todos.length == 0) {
    return <h2>No task yet</h2>;
  }

  
  return (
    <section className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo.todo}
          isCompleted={todo.isCompleted}
          onDelete={() => handleDelete(todo.id)}
          onToggle={() => handleToggle(todo.id)}
        />
      ))}
    </section>
  );
}
