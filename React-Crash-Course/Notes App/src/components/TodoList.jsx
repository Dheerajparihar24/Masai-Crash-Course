import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  handleDelete,
  handleToggle,
  handleClearTask,
  handleUpdateTodo,
}) {
  if (todos.length == 0) {
    return <h2>No task yet</h2>;
  }

  const completedTask = todos.filter((todo) => todo.isCompleted);
  return (
    <section className="todo-list">
      <div className="task-logic">
        <p>Total task: {todos.length}</p>
        <p>Completed: {completedTask.length}</p>

        <button onClick={handleClearTask}>Clear All Task</button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo.todo}
          isCompleted={todo.isCompleted}
          onDelete={() => handleDelete(todo.id)}
          onToggle={() => handleToggle(todo.id)}
          onUpdate={(updatedText) => handleUpdateTodo(todo.id, updatedText)}
        />
      ))}
    </section>
  );
}
